import { createMetadata } from "forma-li";
import { languages, type Lang } from "@/configs/language";
import Login from "@/components/demo/auth/Login";
import TwoColumnLayout from "@/components/demo/auth/layouts/TwoColumn";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  return createMetadata(await params, "login");
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang =
    resolvedParams.lang in languages ? (resolvedParams.lang as Lang) : "fa";

  return (
    <Login
      UiComponent={TwoColumnLayout}
      theme="minimal"
      variant="login"
      className="w-full max-w-none px-0"
    />
  );
}
