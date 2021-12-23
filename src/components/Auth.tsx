import { useAuth0, User as Auth0User } from "@auth0/auth0-react";
import { Spinner, useLatestRef } from "@chakra-ui/react";
import Router from "next/router";
import { FC, memo, useEffect } from "react";
import { useGQLQuery } from "rq-gql";
import { proxy, useSnapshot } from "valtio";
import { CurrentUserQuery, gql } from "../graphql";
import { rqGQLClient } from "../rqClient";
import { useAction } from "../utils/action";

export const AuthState = proxy<{
  auth0User: Auth0User | null;
  user: CurrentUserQuery["currentUser"];
  project: CurrentUserQuery["project"];
  isLoading: boolean;
}>({
  auth0User: null,
  user: null,
  project: null,
  isLoading: true,
});

export function SyncAuth() {
  const { user, getIdTokenClaims, isLoading } = useAuth0();
  const headersSnap = useSnapshot(rqGQLClient.headers);

  const latestGetIdToken = useLatestRef(getIdTokenClaims);

  const hasAuthorizationToken = !!headersSnap.authorization;

  const { isLoading: currentUserIsLoading } = useGQLQuery(
    gql(/* GraphQL */ `
      query currentUser {
        currentUser {
          id
          email
          name
          role
          picture
          tags
          projects {
            id
            code
            label
          }
          groups {
            id
            code
            label
            tags
          }
        }
        project(code: "example") {
          id
          code
          label
        }
      }
    `),
    undefined,
    {
      enabled: hasAuthorizationToken,
      onSuccess(data) {
        AuthState.user = data.currentUser;
        AuthState.project = data.project;
      },
      onSettled() {
        AuthState.isLoading = false;
      },
    }
  );

  useEffect(() => {
    AuthState.isLoading = currentUserIsLoading || isLoading;
  }, [isLoading, currentUserIsLoading]);

  useEffect(() => {
    AuthState.auth0User = user || null;
  }, [user]);

  useEffect(() => {
    if (user) {
      AuthState.isLoading = true;
      latestGetIdToken.current().then((data) => {
        rqGQLClient.headers.authorization = `Bearer ${data.__raw}`;

        AuthState.isLoading = true;
      });
    }
  }, [user, latestGetIdToken]);

  return <OnStart />;
}

const OnStart = memo(function OnStart() {
  const { project } = useAuth();

  const startAction = useAction({
    verbName: "OpenTemplateApplication",
  });

  const projectId = project?.id;

  useEffect(() => {
    if (projectId) startAction();
  }, [projectId, startAction]);

  return null;
});

export const useAuth = () => useSnapshot(AuthState);

export function withAuth<Props extends Record<string, unknown>>(
  Cmp: FC<Props>
) {
  const WithAuth: {
    (props: Props): JSX.Element;
    displayName: string;
  } = function WithAuth(props: Props) {
    const { isLoading, user } = useAuth();

    if (isLoading) return <Spinner />;

    if (user) return <Cmp {...props} />;

    typeof window !== "undefined" && Router.replace("/");

    return <Spinner />;
  };

  WithAuth.displayName = Cmp.name;

  return WithAuth;
}
