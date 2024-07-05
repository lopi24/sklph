"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <Button
      className="font-medium text-sm tracking-wider whitespace-nowrap px-4 py-2 transition-all duration-300 ease-linear rounded-full"
      variant="default"
      onClick={() => signIn()}
    >
      Sign in
    </Button>
  );
};

export default SignInButton;
