"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { detectComponentsResponsive } from "forma-li";
import type { LoginComponentProps } from "@/types";

const LoginDesktop = dynamic(() => import("./desktop/Login"));
const LoginMobile = dynamic(() => import("./mobile/Login"));
const LoginIpad = dynamic(() => import("./ipad/Login"));

export default function TwoColumnLayout(props: LoginComponentProps) {
  const [deviceType, setDeviceType] = useState<string>("desktop");

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
    LoginDesktop
  );

  if (typeof LoginComponent === "string") {
    return null;
  }

  return <LoginComponent {...props} />;
}