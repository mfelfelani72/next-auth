/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-12-31 13:00:34
 * @Description:
 */

import dynamic from "next/dynamic";

// Components

const RegisterDesktop = dynamic(
  () => import("@/components/demo/auth/desktop/Register")
);
const RegisterMobile = dynamic(
  () => import("@/components/demo/auth/mobile/Register")
);

const RegisterIpad = dynamic(
  () => import("@/components/demo/auth/ipad/Register")
);

// Functions

import detectComponentsResponsive from "@/libraries/app/detectComponentResponsive";

// Interfaces

import { type Lang } from "@/configs/app/language";

const LoginLanding = async ({ params }: { params: { lang: Lang } }) => {
  const RegisterComponent = await detectComponentsResponsive(
    RegisterMobile,
    RegisterIpad,
    RegisterDesktop
  );

  return <RegisterComponent params={params} />;
};

export default LoginLanding;
