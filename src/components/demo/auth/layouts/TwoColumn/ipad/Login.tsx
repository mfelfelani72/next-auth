"use client";

import { useTranslation } from "@/hooks/useTranslation";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";
import LoginForm from "../common/LoginForm";
import LoginDetails from "../common/LoginDetails";
import type { LoginComponentProps } from "@/types";

export default function LoginIpad(props: LoginComponentProps) {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-purple-900 via-purple-800 to-black">
      <div className="flex flex-row w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl">
        <div className="w-1/2 bg-white/10 backdrop-blur-md p-6 flex flex-col">
          <h1 className="text-xl font-bold text-white mb-1">{t("login_title")}</h1>
          <p className="text-sm text-gray-200 mb-4">{t("login_description")}</p>
          <LoginForm {...props} />
        </div>
        <div className="w-1/2 bg-white/80 backdrop-blur-none p-6 flex flex-col items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-cyan-800">Brand</h2>
            <p className="text-xs text-gray-500 mt-2">{t("right_sidebar_description")}</p>
          </div>
          <LoginDetails />
        </div>
      </div>
    </div>
  );
}