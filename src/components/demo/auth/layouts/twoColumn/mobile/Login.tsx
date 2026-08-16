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

// Types

import type { LoginComponentProps } from "../../../../../../types";

// Hooks

import { useTranslation } from "../../../../../../hooks/useTranslation";
export default function LoginMobile(props: LoginComponentProps) {
  // Hooks

  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-linear-to-br">
      <div className="w-full max-w-sm bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
        <h1 className="text-2xl font-bold text-center text-white mb-2">
          {t("login_title")}
        </h1>
        <p className="text-center text-gray-200 mb-6 text-sm">
          {t("login_description")}
        </p>
        <LoginForm {...props} />
      </div>
    </div>
  );
}
