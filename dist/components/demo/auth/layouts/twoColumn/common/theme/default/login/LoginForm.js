/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-04 11:48:20
 * @Description:
 */
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
// Components
import LocalizedLink from "../../../../../../../../../components/base/LocalizedLink";
import { InputPassword, InputEmail } from "forma-ui";
const GoogleIcon = () => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18", children: _jsxs("g", { fill: "none", fillRule: "evenodd", children: [_jsx("path", { fill: "#4285F4", d: "M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" }), _jsx("path", { fill: "#34A853", d: "M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" }), _jsx("path", { fill: "#FBBC05", d: "M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" }), _jsx("path", { fill: "#EA4335", d: "M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" })] }) }));
// Hooks
import { useTranslation } from "../../../../../../../../../hooks/useTranslation";
export default function LoginForm({ onSubmit, errors, message, }) {
    // Hooks
    const { t } = useTranslation();
    // States
    const [isLoading, setIsLoading] = useState(false);
    // Functions
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        onSubmit(formData);
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col h-full w-full animate-in fade-in slide-in-from-bottom-4 duration-500 justify-between", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex flex-col gap-7", children: [_jsxs("div", { children: [_jsx("label", { className: "xs:text-[16px] text-Neutral-100 mb-1", children: t("email") }), _jsx(InputEmail, { id: "email", name: "email", label: "", validate: t("invalid_email"), placeholder: t("enter_your_email"), className: "flex justify-between h-10 rounded-lg xl:placeholder:text-sm xs:placeholder:text-xs shadow-inner bg-white/20 border-Neutral-200 text-white placeholder:text-Neutral-100" }), (errors === null || errors === void 0 ? void 0 : errors.email) && (_jsx("p", { className: "mt-1 text-sm text-red-300", children: errors.email }))] }), _jsxs("div", { children: [_jsx("label", { className: "xs:text-[16px] text-Neutral-100 mb-1", children: t("password") }), _jsx(InputPassword, { id: "password", name: "password", validate: t("invalid_password"), placeholder: t("enter_your_password"), className: "flex justify-between h-10 rounded-lg xl:placeholder:text-sm xs:placeholder:text-xs shadow-inner bg-white/20 border-Neutral-200 text-white placeholder:text-Neutral-100" }), (errors === null || errors === void 0 ? void 0 : errors.password) && (_jsx("p", { className: "mt-1 text-sm text-red-300", children: errors.password }))] })] }), _jsx("div", { className: "flex justify-end mt-2", children: _jsx(LocalizedLink, { href: "/auth/forgot-password", className: "text-xs text-Neutral-100 hover:text-primary-400 transition-colors", children: t("forgot_password") }) }), message && (_jsx("div", { className: "mt-4 text-center text-sm text-red-300", children: message }))] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-4 mt-6", children: [_jsx("div", { className: "flex-1 h-px bg-Neutral-100" }), _jsx("span", { className: "text-xs text-Neutral-100", children: t("or_continue_with") }), _jsx("div", { className: "flex-1 h-px bg-Neutral-100" })] }), _jsx("div", { className: "flex gap-3 mt-2", children: _jsxs("button", { type: "button", className: "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-Neutral-200 bg-white/20 hover:bg-white/30 transition-all duration-300 text-Neutral-100 cursor-pointer", children: [_jsx(GoogleIcon, {}), _jsx("span", { className: "text-sm", children: t("google") })] }) }), _jsxs("p", { className: "text-center mt-2 text-sm text-Neutral-100", children: [t("dont_have_account"), " ", _jsx(LocalizedLink, { href: "/auth/register", className: "text-primary-400 hover:text-primary-300 font-medium transition-colors", children: t("create_account") })] }), _jsx("button", { type: "submit", disabled: isLoading, className: "w-full mt-2 py-3 rounded-lg bg-linear-to-r from-primary-400 to-primary-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary-400/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed", children: isLoading ? (_jsxs("span", { className: "flex items-center justify-center gap-2", children: [_jsxs("svg", { className: "animate-spin h-4 w-4", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }), t("loading")] })) : (t("login")) })] })] }));
}
