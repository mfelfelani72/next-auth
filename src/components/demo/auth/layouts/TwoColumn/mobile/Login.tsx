"use client";

import { useTranslation } from "@/hooks/useTranslation";
import LoginForm from "../common/LoginForm";
import type { LoginComponentProps } from "@/types";

export default function LoginMobile(props: LoginComponentProps) {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-purple-900 via-purple-800 to-black">
      <div className="w-full max-w-sm bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
        <h1 className="text-2xl font-bold text-center text-white mb-2">{t("login_title")}</h1>
        <p className="text-center text-gray-200 mb-6 text-sm">{t("login_description")}</p>
        <LoginForm {...props} />
      </div>
    </div>
  );
}