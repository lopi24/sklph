"use client";

import { createContext, useContext, ReactNode } from "react";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";

interface SessionContextType {
  session: Session | null;
  status: "loading" | "authenticated" | "unauthenticated";
}

const SessionContext = createContext<SessionContextType>({
  session: null,
  status: "loading",
});

interface SessionProviderProps {
  children: ReactNode;
}

export const SessionProvider = ({ children }: SessionProviderProps) => {
  const { data: session, status } = useSession();
  return (
    <SessionContext.Provider value={{ session, status }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => useContext(SessionContext);
