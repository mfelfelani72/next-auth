import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

// Components

import Login from "@/components/Login";
import NewUiLogin from "@/components/NewUiLogin";
import New2 from "@/components/New2";

// Interfaces

import type { LoginProps } from "@/types";

export default function Page({ loginRoute, onGoogleLogin }: LoginProps) {
  return (
    <>
      <Login
        loginRoute={"/api/auth/login"}
        // onGoogleLogin={onGoogleLogin}
        // UiComponent={NewUiLogin}
        // UiComponent={New2}
      />
    </>
  );
}
