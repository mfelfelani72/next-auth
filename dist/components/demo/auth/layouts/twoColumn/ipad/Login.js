/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-04 11:48:20
 * @Description:
 */
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Components
import LoginForm from "../common/theme/default/login/LoginForm";
import LoginDetails from "../common/theme/default/login/LoginDetails";
// Hooks
import { useTranslation } from "../../../../../../hooks/useTranslation";
export default function LoginIpad(props) {
    // Hooks
    const { t } = useTranslation();
    return (_jsx("div", { className: "flex items-center justify-center min-h-screen p-6 ", children: _jsxs("div", { className: "flex flex-row w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl", children: [_jsxs("div", { className: "w-1/2 bg-white/10 backdrop-blur-md p-6 flex flex-col", children: [_jsx("h1", { className: "text-xl font-bold text-white mb-1", children: t("login_title") }), _jsx("p", { className: "text-sm text-gray-200 mb-4", children: t("login_description") }), _jsx(LoginForm, Object.assign({}, props))] }), _jsxs("div", { className: "w-1/2 bg-white/80 backdrop-blur-none p-6 flex flex-col items-center justify-center", children: [_jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-cyan-800", children: "Brand" }), _jsx("p", { className: "text-xs text-gray-500 mt-2", children: t("right_sidebar_description") })] }), _jsx(LoginDetails, {})] })] }) }));
}
