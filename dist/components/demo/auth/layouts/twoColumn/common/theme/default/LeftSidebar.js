/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-04 11:48:20
 * @Description:
 */
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRouter } from "next/navigation";
// Components
import { ArrowLeft } from "lucide-react";
// Functions
import { cn } from "forma-li";
export default function LeftSidebar({ title, description, className, children, }) {
    // Hooks
    const router = useRouter();
    return (_jsxs("div", { className: cn("flex flex-col w-full px-6 py-5 relative overflow-hidden", "bg-white/3 backdrop-blur-lg", "border border-white/5", "shadow-2xl shadow-black/10", "ltr:rounded-l-2xl rtl:rounded-r-2xl", "xl:px-8 xl:py-6", className), children: [_jsx("div", { className: "absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent pointer-events-none" }), _jsx("div", { className: "absolute inset-0 rounded-l-2xl shadow-[inset_0_0_80px_rgba(255,255,255,0.03)] pointer-events-none" }), _jsxs("header", { className: "relative z-10 mb-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("button", { onClick: () => router.back(), className: "group cursor-pointer flex h-8 w-8 items-center justify-center rounded-full border border-gray-200/50 bg-white/30 text-gray-400 transition-all hover:bg-white/20 hover:border-gray-300 hover:text-gray-600", children: _jsx(ArrowLeft, { className: "h-4 w-4 transition-transform group-hover:scale-110 rtl:rotate-180 text-Neutral-100" }) }), _jsx("h1", { className: "text-lg font-semibold tracking-wide text-Neutral-50 xl:text-xl", children: title })] }), _jsx("p", { className: "hidden 4xl:block mt-1 max-w-[24rem] text-xs text-Neutral-100 ltr:pl-11 rtl:pr-11 xl:text-sm", children: description })] }), _jsx("div", { className: "relative z-10 flex-1", children: children })] }));
}
