/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-04 11:48:20
 * @Description:
 */

"use client";

// Components

import LeftSidebar from "../common/theme/default/LeftSidebar";
import RightSidebar from "../common/theme/default/RightSidebar";
import LoginForm from "../common/theme/default/login/LoginForm";
import LoginDetails from "../common/theme/default/login/LoginDetails";

// Types

import type { LoginComponentProps } from "../../../../../../types";

// Hooks

import { useTranslation } from "../../../../../../hooks/useTranslation";

export default function LoginDesktop(props: LoginComponentProps) {
  // Hooks

  const { t } = useTranslation();

  return (
    <div className="flex flex-row h-screen w-full items-center justify-center">
      <div className="relative inline-flex flex-row z-120 max-w-[60dvw] h-[77dvh]">
        <LeftSidebar
          title={t("login_title")}
          description={t("login_description")}
        >
          <LoginForm {...props} />
        </LeftSidebar>
        <RightSidebar>
          <LoginDetails />
        </RightSidebar>
      </div>
    </div>
  );
}
