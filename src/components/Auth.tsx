import { useAuth0, User as Auth0User } from "@auth0/auth0-react";
import { Spinner } from "@chakra-ui/react";
import Router from "next/router";
import { FC, useEffect } from "react";
import { useGQLQuery } from "rq-gql";
import { proxy, useSnapshot } from "valtio";
import { CurrentUserQuery, gql } from "../graphql";
import { rqGQLClient } from "../rqClient";

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

  useEffect(() => {
    AuthState.isLoading = isLoading;
  }, [isLoading]);

  useEffect(() => {
    AuthState.auth0User = user || null;
  }, [user]);

  useGQLQuery(
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
        project(code: "Project Code") {
          id
          code
          label
        }
      }
    `),
    undefined,
    {
      enabled: !!headersSnap.authorization,
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
    if (user) {
      getIdTokenClaims().then((data) => {
        rqGQLClient.headers.authorization = `Bearer ${data.__raw}`;

        AuthState.isLoading = true;
      });
    }
  }, [user]);

  return null;
}

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

    Router.replace("/");

    return <Spinner />;
  };

  WithAuth.displayName = Cmp.name;

  return WithAuth;
}
