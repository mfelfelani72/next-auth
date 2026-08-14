/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-04 11:48:20
 * @Description:
 */

"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import type { ComponentType } from "react";

// Types

import type { RegisterComponentProps } from "@/types";
type DynamicComponent<T = {}> = ComponentType<T>;

// Interfaces

interface RegisterFormProps extends RegisterComponentProps {}

// Hooks

import { useTranslation } from "@/hooks/useTranslation";
export default function RegisterMobile(props: RegisterComponentProps) {
  // Hooks

  const { t } = useTranslation();

  // Functions

  const RegisterForm = useMemo(() => {
    return dynamic(
      () =>
        import(`../common/theme/${props?.theme}/RegisterForm`).catch(
          () => import(`../common/theme/default/register/RegisterForm`),
        ),
      { ssr: false },
    ) as DynamicComponent<RegisterFormProps>;
  }, [props?.theme]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-linear-to-br">
      <div className="w-full max-w-sm bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
        <h1 className="text-2xl font-bold text-center text-white mb-2">
          {t("register_title")}
        </h1>
        <p className="text-center text-gray-200 mb-6 text-sm">
          {t("register_description")}
        </p>
        <RegisterForm {...props} />
      </div>
    </div>
  );
}
