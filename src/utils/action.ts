import { useLatestRef, useToast } from "@chakra-ui/react";
import { useCallback } from "react";
import { useGQLMutation } from "rq-gql";
import { useAuth } from "../components/Auth";
import { ActionInput, gql } from "../graphql";

export type ActionArguments = Omit<ActionInput, "projectId" | "timestamp">;

export const useAction = (baseAction?: Partial<ActionArguments>) => {
  const toast = useToast();

  const latestBaseAction = useLatestRef(baseAction);

  const mutation = useGQLMutation(
    gql(/* GraphQL */ `
      mutation Action($data: ActionInput!) {
        action(data: $data)
      }
    `),
    {
      onError(err) {
        console.error(err);
        if (process.env.NODE_ENV === "development") {
          toast({
            status: "error",
            title:
              "Error while sending Action to API (this message is only seen in Development Mode)",
            description: err.message,
          });
        }
      },
      retry: 3,
    }
  );

  const latestMutation = useLatestRef(mutation.mutate);

  const { project } = useAuth();

  const projectId = project?.id;

  return useCallback(
    (data?: Partial<ActionArguments>) => {
      if (!projectId) throw Error("Invalid projectId");

      const verbName = latestBaseAction.current?.verbName || data?.verbName;

      if (!verbName) throw Error("Invalid Action");

      latestMutation.current({
        data: {
          projectId,
          timestamp: Date.now(),
          ...latestBaseAction.current,
          ...data,
          verbName,
        },
      });
    },
    [projectId, latestMutation, latestBaseAction]
  );
};
