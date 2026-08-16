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
import Image from "../../../../../../../../components/base/Image";
// Functions
import { cn } from "forma-li";
// Hooks
import { useTranslation } from "../../../../../../../../hooks/useTranslation";
export default function BrandCard({ className }) {
    // Hooks
    const { t } = useTranslation();
    return (_jsxs("div", { className: cn("flex flex-col items-center gap-4 text-center", className), children: [_jsx("div", { className: "h-20 w-20 xl:h-24 xl:w-24 shrink-0", children: _jsx(Image, { src: "/images/png/logo.png", alt: "Logo", width: 80, height: 80, unoptimized: true, className: "h-full w-full object-contain", enableLoading: false, loading: "eager" }) }), _jsx("h1", { className: "text-3xl font-bold tracking-tight text-cyan-800 xl:text-4xl 2xl:text-5xl", children: t(process.env.NEXT_PUBLIC_LICENSE_NAME || "") }), _jsx("p", { className: "text-xs text-Neutral-400 xl:text-sm", children: t("right_sidebar_description") })] }));
}
