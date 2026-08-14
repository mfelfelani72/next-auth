// mobile/Login.tsx
"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "@/hooks/useTranslation";
import type { LoginComponentProps } from "@/types";
import type { ComponentType } from "react";

interface LoginFormProps extends LoginComponentProps {}

type DynamicComponent<T = {}> = ComponentType<T>;

export default function LoginMobile(props: LoginComponentProps) {
  const { t } = useTranslation();
  const theme = props?.theme;

  const LoginForm = useMemo(() => {
    return dynamic(
      () => import(`../common/theme/${theme}/LoginForm`).catch(() => 
        import(`../common/theme/default/LoginForm`)
      ),
      { ssr: false }
    ) as DynamicComponent<LoginFormProps>;
  }, [theme]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-linear-to-br">
      <div className="w-full max-w-sm bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
        <h1 className="text-2xl font-bold text-center text-white mb-2">{t("login_title")}</h1>
        <p className="text-center text-gray-200 mb-6 text-sm">{t("login_description")}</p>
        <LoginForm {...props} />
      </div>
    </div>
  );
}