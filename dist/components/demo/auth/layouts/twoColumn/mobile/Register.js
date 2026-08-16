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
import RegisterForm from "../common/theme/default/register/RegisterForm";
// Hooks
import { useTranslation } from "../../../../../../hooks/useTranslation";
export default function RegisterMobile(props) {
    // Hooks
    const { t } = useTranslation();
    return (_jsx("div", { className: "flex items-center justify-center min-h-screen p-4 bg-linear-to-br", children: _jsxs("div", { className: "w-full max-w-sm bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30", children: [_jsx("h1", { className: "text-2xl font-bold text-center text-white mb-2", children: t("register_title") }), _jsx("p", { className: "text-center text-gray-200 mb-6 text-sm", children: t("register_description") }), _jsx(RegisterForm, Object.assign({}, props))] }) }));
}
