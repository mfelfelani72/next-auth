import type { Metadata } from "next";

export async function generateMetadata({
  metadata,
}: {
  metadata?: LoginMetadata;
}): Promise<Metadata> {
  return {
    title: metadata?.title || "Login",
    description: metadata?.description || "Login page",
  };
}

// Components

import Login from "@/components/ClientLogin";

// Interfaces

import type { LoginProps, LoginMetadata } from "@/types";
import ServerLogin from "@/components/ServerLogin";

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
