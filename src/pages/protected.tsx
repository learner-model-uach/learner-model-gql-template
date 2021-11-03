import { Text } from "@chakra-ui/react";
import { useAuth, withAuth } from "../components/Auth";

export default withAuth(function ProtectedPage() {
  const { user } = useAuth();

  return <Text whiteSpace="pre-wrap">{JSON.stringify(user, null, 2)}</Text>;
});
