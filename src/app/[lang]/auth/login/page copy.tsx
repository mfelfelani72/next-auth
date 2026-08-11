"use client";
import type { Metadata } from "next";
import Head from "next/head";

// export const metadata: Metadata = {
//   title: "Login",
//   description: "Login page",
// };

// Components

import Login from "@/components/Login";
import UiLogin2 from "@/components/demo/UiLogin2";
import UiLogin3 from "@/components/demo/UiLogin3";
import UiLogin4 from "@/components/demo/UiLogin4";
import UiLogin5 from "@/components/demo/UiLogin5";

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
        // UiComponent={UiLogin2}
        // UiComponent={UiLogin3}
        // UiComponent={UiLogin5}
        // UiComponent={UiLogin4}
        // UiComponent={UiLogin5}
        // UiComponent={New2}
      />
    </>
  );
}
