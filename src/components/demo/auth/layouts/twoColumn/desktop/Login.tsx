/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-04 11:48:20
 * @Description:
 */

"use client";

import type { ComponentType, ReactNode } from "react";
import { useMemo } from "react";
import dynamic from "next/dynamic";

// Types

import type { LoginComponentProps } from "@/types";
type DynamicComponent<T = {}> = ComponentType<T>;

// Interfaces

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

// Hooks

import { useTranslation } from "@/hooks/useTranslation";

export default function LoginDesktop(props: LoginComponentProps) {
  // Hooks

  const { t } = useTranslation();

  // Functions

  const Components = useMemo(() => {
    const createDynamicComponent = <P extends object>(
      name: string,
    ): DynamicComponent<P> => {
      return dynamic(
        () =>
          import(`../common/theme/${props?.theme}/${name}`).catch(
            () => import(`../common/theme/default/${name}`),
          ),
        { ssr: false },
      ) as DynamicComponent<P>;
    };

    return {
      LeftSidebar: createDynamicComponent<LeftSidebarProps>("LeftSidebar"),
      RightSidebar: createDynamicComponent<RightSidebarProps>("RightSidebar"),
      LoginForm: createDynamicComponent<LoginFormProps>("LoginForm"),
      LoginDetails: createDynamicComponent<LoginDetailsProps>("LoginDetails"),
    };
  }, [props?.theme]);

  const { LeftSidebar, RightSidebar, LoginForm, LoginDetails } = Components;

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
