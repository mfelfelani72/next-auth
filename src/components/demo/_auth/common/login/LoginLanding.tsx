import { cookies } from "next/headers";
import dynamic from "next/dynamic";

import { detectComponentsResponsive } from "forma-li";

const LoginDesktop = dynamic(
  () => import("@/components/demo/_auth/desktop/Login")
);

const LoginMobile = dynamic(
  () => import("@/components/demo/_auth/mobile/Login")
);

const LoginIpad = dynamic(
  () => import("@/components/demo/_auth/ipad/Login")
);

import { type Lang } from "@/configs/language";

const LoginLanding = async ({
  params,
}: {
  params: { lang: Lang };
}) => {
  const cookieStore = await cookies();

  const deviceType = cookieStore.get("device-type")?.value;

  const LoginComponent = detectComponentsResponsive(
    deviceType,
    LoginMobile,
    LoginIpad,
    LoginDesktop
  );

  if (typeof LoginComponent === "string") {
    return null;
  }

  return <LoginComponent params={params} />;
};

export default LoginLanding;