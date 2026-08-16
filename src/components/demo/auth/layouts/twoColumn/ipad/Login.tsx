/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-04 11:48:20
 * @Description:
 */

"use client";

// Components

import LoginForm from "../common/theme/default/login/LoginForm";
import LoginDetails from "../common/theme/default/login/LoginDetails";

// Types

import type { LoginComponentProps } from "../../../../../../types";

// Hooks

import { useTranslation } from "../../../../../../hooks/useTranslation";

export default function LoginIpad(props: LoginComponentProps) {
  // Hooks

  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center min-h-screen p-6 ">
      <div className="flex flex-row w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl">
        <div className="w-1/2 bg-white/10 backdrop-blur-md p-6 flex flex-col">
          <h1 className="text-xl font-bold text-white mb-1">
            {t("login_title")}
          </h1>
          <p className="text-sm text-gray-200 mb-4">{t("login_description")}</p>
          <LoginForm {...props} />
        </div>
        <div className="w-1/2 bg-white/80 backdrop-blur-none p-6 flex flex-col items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-cyan-800">Brand</h2>
            <p className="text-xs text-gray-500 mt-2">
              {t("right_sidebar_description")}
            </p>
          </div>
          <LoginDetails />
        </div>
      </div>
    </div>
  );
}
