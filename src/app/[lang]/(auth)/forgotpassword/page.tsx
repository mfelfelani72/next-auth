"use client";
import type { Metadata } from "next";
import Head from "next/head";

// export const metadata: Metadata = {
//   title: "forgot password",
//   description: "Forgotpassword Page",
// };

// Components

import ForgotPassword from "@/components/ForgotPassword";

// Interface

import type { LoginProps } from "@/types";

export default function Page({ loginRoute, onGoogleLogin }: LoginProps) {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
        <meta name="description" content="Reset your password" />
      </Head>

      <ForgotPassword />
    </>
  );
}
