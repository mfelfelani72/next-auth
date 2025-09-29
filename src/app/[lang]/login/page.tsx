import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

// Components

import ServerLogin from "@/components/Login";

// Interfaces

import type { LoginProps } from "@/types";

export default function Page({ loginRoute, onGoogleLogin }: LoginProps) {
  return (
    <>
      <ServerLogin
        loginRoute={"/api/auth/login"}
        onGoogleLogin={onGoogleLogin}
      />
    </>
  );
}
