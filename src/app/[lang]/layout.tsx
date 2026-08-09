/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-04 11:48:20
 * @Description:
 */

import type { Metadata } from "next";

// Containers

// import UserCheck from "@/containers/user/UserCheck";

// Components

import LayoutWrapper from "@/app/[lang]/LayoutWrapper";

// Functions

import { getDictionary } from "@/locale";

// Interfaces

import { LangLayoutProps } from "@/interfaces/global";
import { languages, type Lang } from "@/configs/language";

// Functions

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const resolvedParams = await params;
  const lang =
    resolvedParams.lang in languages ? (resolvedParams.lang as Lang) : "en";

  const dictionary = await getDictionary(lang);

  return (
    <>
      <LayoutWrapper langFromUrl={lang} dictionary={dictionary}>
        {children}
      </LayoutWrapper>
    </>
  );
}
