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
import BrandCard from "./BrandCard";
// Functions
import { cn } from "forma-li";
export default function RightSidebar({ className, children, }) {
    return (_jsxs("div", { className: cn("flex flex-col w-full p-2 relative", "bg-white/80 backdrop-blur-none", "border border-white/20", "shadow-2xl shadow-black/15", "ltr:rounded-r-2xl rtl:rounded-l-2xl", className), children: [_jsx("div", { className: "absolute inset-0 bg-linear-to-br from-white/40 via-white/10 to-transparent pointer-events-none ltr:rounded-r-2xl rtl:rounded-l-2xl" }), _jsxs("div", { className: "flex flex-col h-full items-center justify-between z-10", children: [_jsx(BrandCard, {}), children] })] }));
}
