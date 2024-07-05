"use client";

import { signOut } from "next-auth/react";

interface LogoutButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export const LogoutButton = ({ children, className }: LogoutButtonProps) => {
  return (
    <span className={className} onClick={() => signOut()}>
      {children}
    </span>
  );
};
