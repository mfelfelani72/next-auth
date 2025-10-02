"use client";
import type { Metadata } from "next";
import Head from "next/head";
import ChangePassword from "@/components/ChangePassword";

// export const metadata: Metadata = {
//   title: "change password",
//   description: "change password page",
// };

// Components

import Login from "@/components/ChangePassword";

// Interface

import type { LoginProps } from "@/types";

export default function Page({ loginRoute, onGoogleLogin }: LoginProps) {
  return (
    <>
      <Head>
        <title>Change password</title>
        <meta name="description" content="Change your password" />
      </Head>

      <ChangePassword loginRoute={"/api/auth/changepassword"}/>
    </>
  );
}
