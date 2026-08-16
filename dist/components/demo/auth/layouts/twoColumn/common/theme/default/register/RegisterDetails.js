/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-12-31 07:55:26
 * @Description: Login Details - Dark text for white bg
 */
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Components
import { Shield, Bolt, Eye } from "lucide-react";
// Hooks
import { useTranslation } from "../../../../../../../../../hooks/useTranslation";
const RegisterDetails = () => {
    // Hooks
    const { t } = useTranslation();
    // Constants
    const features = [
        { icon: Shield, label: t("encrypted"), color: "text-emerald-600" },
        { icon: Bolt, label: t("fast"), color: "text-amber-600" },
        { icon: Eye, label: t("protected"), color: "text-sky-600" },
    ];
    return (_jsx("div", { className: "px-1", children: _jsx("div", { className: "flex gap-6", children: features.map(({ icon: Icon, label, color }) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Icon, { className: `h-4 w-4 ${color} xl:h-5 xl:w-5` }), _jsx("span", { className: "text-xs text-gray-500 xl:text-sm", children: label })] }, label))) }) }));
};
export default RegisterDetails;
