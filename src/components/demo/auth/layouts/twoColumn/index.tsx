/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-04 11:48:20
 * @Description:
 */

"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Components

const LoginDesktop = dynamic(() => import("./desktop/Login"));
const LoginMobile = dynamic(() => import("./mobile/Login"));
const LoginIpad = dynamic(() => import("./ipad/Login"));

// Functions

import { detectComponentsResponsive } from "forma-li";

// Types

import type { LoginComponentProps } from "@/types";

export default function TwoColumnLayout(props: LoginComponentProps) {
  // States

  const [deviceType, setDeviceType] = useState<string>("desktop");

  // Functions

  useEffect(() => {
    const getDeviceType = () => {
      const width = window.innerWidth;
      if (width < 768) return "mobile";
      if (width < 1024) return "ipad";
      return "desktop";
    };
    setDeviceType(getDeviceType());

    const handleResize = () => setDeviceType(getDeviceType());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const LoginComponent = detectComponentsResponsive(
    deviceType,
    LoginMobile,
    LoginIpad,
    LoginDesktop,
  );

  if (typeof LoginComponent === "string") {
    return null;
  }

  return <LoginComponent {...props} />;
}
