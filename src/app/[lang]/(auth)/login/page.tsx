"use client";
import type { Metadata } from "next";
import Head from "next/head";

// export const metadata: Metadata = {
//   title: "Login",
//   description: "Login page",
// };

// Components

import Login from "@/components/Login";

// Interface

import type { LoginProps } from "@/types";

export default function Page({ loginRoute, onGoogleLogin }: LoginProps) {
  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Login to your account" />
      </Head>

      <Login
        loginRoute={"/api/auth/login"}
        // onGoogleLogin={onGoogleLogin}
        // UiComponent={NewUiLogin}
        // UiComponent={New2}
      />
    </>
  );
}
