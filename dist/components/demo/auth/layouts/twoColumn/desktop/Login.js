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
import LeftSidebar from "../common/theme/default/LeftSidebar";
import RightSidebar from "../common/theme/default/RightSidebar";
import LoginForm from "../common/theme/default/login/LoginForm";
import LoginDetails from "../common/theme/default/login/LoginDetails";
// Hooks
import { useTranslation } from "../../../../../../hooks/useTranslation";
export default function LoginDesktop(props) {
    // Hooks
    const { t } = useTranslation();
    return (_jsx("div", { className: "flex flex-row h-screen w-full items-center justify-center", children: _jsxs("div", { className: "relative inline-flex flex-row z-120 max-w-[60dvw] h-[77dvh]", children: [_jsx(LeftSidebar, { title: t("login_title"), description: t("login_description"), children: _jsx(LoginForm, Object.assign({}, props)) }), _jsx(RightSidebar, { children: _jsx(LoginDetails, {}) })] }) }));
}
