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
import RegisterForm from "../common/theme/default/register/RegisterForm";
import RegisterDetails from "../common/theme/default/register/RegisterDetails";

// Types

import type { RegisterComponentProps } from "../../../../../../types";

// Hooks

import { useTranslation } from "../../../../../../hooks/useTranslation";

export default function RegisterDesktop(props: RegisterComponentProps) {
  // Hooks

  const { t } = useTranslation();

  return (
    <div className="flex flex-row h-screen w-full items-center justify-center">
      <div className="relative inline-flex flex-row z-120 max-w-[60dvw] h-[77dvh]">
        <LeftSidebar
          title={t("register_title")}
          description={t("register_description")}
        >
          <RegisterForm {...props} />
        </LeftSidebar>
        <RightSidebar>
          <RegisterDetails />
        </RightSidebar>
      </div>
    </div>
  );
}
