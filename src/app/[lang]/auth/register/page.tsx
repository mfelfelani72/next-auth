/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-04 11:48:20
 * @Description:
 */

// Components

import Register from "../../../../components/demo/auth/Register";

// Configures

import { languages, type Lang } from "../../../../configs/language";

// Functions

import { createMetadata } from "forma-li";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  return createMetadata(await params, "register");
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang =
    resolvedParams.lang in languages ? (resolvedParams.lang as Lang) : "en";

  return (
    <Register
      layout="twoColumn"
      theme="default"
      className="w-full max-w-none px-0"
    />
  );
}
