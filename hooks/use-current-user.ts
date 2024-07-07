// For getting session in client-side

import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
  const session = useSession();

  return session?.data?.user;
};
