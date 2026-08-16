/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-04 11:48:20
 * @Description: TwoColumnLayout with client-side cookie detection
 */

"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { getCookie } from "forma-li";

// Components
const LoginDesktop = dynamic(() => import("./desktop/Login"));
const LoginMobile = dynamic(() => import("./mobile/Login"));
const LoginIpad = dynamic(() => import("./ipad/Login"));

// Functions
import { detectComponentsResponsive } from "forma-li";

// Types
import type { LoginComponentProps } from "../../../../../types";

export default function TwoColumnLayout(props: LoginComponentProps) {
  const [deviceType, setDeviceType] = useState<string>();

  useEffect(() => {
 
    const device = getCookie("device-type");
    if (device) {
      setDeviceType(device);
    }
  });

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