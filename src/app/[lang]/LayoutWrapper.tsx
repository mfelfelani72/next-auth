/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-04 11:48:20
 * @Description:
 */

"use client";

import { useEffect, useState } from "react";

// Components

import DetectDevice from "./DetectDevice";

// Interfaces

import { LangWrapperProps } from "forma-li";

// Zustand

import { useLangStore } from "forma-li";

export default function LayoutWrapper({
  langFromUrl,
  children,
}: LangWrapperProps) {
  // Hooks

  const { lang, dir, setLang, triggerRefresh } = useLangStore();

  console.log("App Language is : ", lang);

  // States

  const [loaded, setLoaded] = useState(false);

  // Hooks

  // Functions

  useEffect(() => {
    if (lang !== langFromUrl) {
      setLang(langFromUrl);
      triggerRefresh?.();
    }
    setLoaded(true);
  }, [langFromUrl, setLang, lang, triggerRefresh]);

  if (!loaded) return null;

  return (
    <div lang={lang} dir={dir} className="">
      <DetectDevice />
      {children}
    </div>
  );
}
