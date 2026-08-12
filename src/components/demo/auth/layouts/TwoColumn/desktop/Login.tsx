"use client";

import { useTranslation } from "@/hooks/useTranslation";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";
import LoginForm from "../common/LoginForm";
import LoginDetails from "../common/LoginDetails";
import type { LoginComponentProps } from "@/types";

export default function LoginDesktop(props: LoginComponentProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row h-screen w-full items-center justify-center">
      <div className="relative inline-flex flex-row z-120 max-w-[60dvw] h-[77dvh]">
        <LeftSidebar title={t("login_title")} description={t("login_description")}>
          <LoginForm {...props} />
        </LeftSidebar>
        <RightSidebar>
          <LoginDetails />
        </RightSidebar>
      </div>
    </div>
  );
}