// ipad/Login.tsx
"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "@/hooks/useTranslation";

import type { LoginComponentProps } from "@/types";
import type { ComponentType, ReactNode } from "react";

// تعریف تایپ برای کامپوننت‌های داینامیک
interface LeftSidebarProps {
  children: ReactNode;
  title: string;
  description: string;
}

interface RightSidebarProps {
  children: ReactNode;
}

interface LoginFormProps extends LoginComponentProps {}

interface LoginDetailsProps {}

type DynamicComponent<T = {}> = ComponentType<T>;

export default function LoginIpad(props: LoginComponentProps) {
  const { t } = useTranslation();
   const theme = props?.theme;

  const Components = useMemo(() => {
    const createDynamicComponent = <P extends object>(name: string): DynamicComponent<P> => {
      return dynamic(
        () => import(`../common/theme/${theme}/${name}`).catch(() => 
          import(`../common/theme/default/${name}`)
        ),
        { ssr: false }
      ) as DynamicComponent<P>;
    };

    return {
      LeftSidebar: createDynamicComponent<LeftSidebarProps>("LeftSidebar"),
      RightSidebar: createDynamicComponent<RightSidebarProps>("RightSidebar"),
      LoginForm: createDynamicComponent<LoginFormProps>("LoginForm"),
      LoginDetails: createDynamicComponent<LoginDetailsProps>("LoginDetails"),
    };
  }, [theme]);

  const { LeftSidebar, RightSidebar, LoginForm, LoginDetails } = Components;

  return (
    <div className="flex items-center justify-center min-h-screen p-6 ">
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