/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-04 11:48:20
 * @Description: TwoColumnLayout with client-side cookie detection
 */
"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { getCookie } from "forma-li";
// Components
const RegisterDesktop = dynamic(() => import("./desktop/Register"));
const RegisterMobile = dynamic(() => import("./mobile/Register"));
const RegisterIpad = dynamic(() => import("./ipad/Register"));
// Functions
import { detectComponentsResponsive } from "forma-li";
export default function TwoColumnLayout(props) {
    const [deviceType, setDeviceType] = useState();
    useEffect(() => {
        const device = getCookie("device-type");
        if (device) {
            setDeviceType(device);
        }
    });
    const RegisterComponent = detectComponentsResponsive(deviceType, RegisterMobile, RegisterIpad, RegisterDesktop);
    if (typeof RegisterComponent === "string") {
        return null;
    }
    return _jsx(RegisterComponent, Object.assign({}, props));
}
