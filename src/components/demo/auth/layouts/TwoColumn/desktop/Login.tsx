// desktop/Login.tsx
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

export default function LoginDesktop(props: LoginComponentProps) {
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