/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-02 08:04:22
 * @Description:
 */
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
export default function UiRegister({ onSubmit, errors, message, dict, lang, }) {
    // States
    const [visible, setVisible] = useState(false);
    // Functions
    useEffect(() => {
        setVisible(true);
    }, []);
    return (_jsx("div", { className: "fixed inset-0 overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-black p-4", children: _jsxs("div", { className: `w-full max-w-md bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/30
          transform transition-all duration-700 ease-out
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `, children: [_jsx("div", { className: "flex justify-center mb-6", children: _jsx(Image, { src: "/logo.png", alt: "Logo", width: 80, height: 80, className: "rounded-full shadow" }) }), _jsx("h1", { className: "text-2xl font-bold text-center text-white mb-2", children: "Create Account" }), _jsx("p", { className: "text-center text-gray-200 mb-6 text-sm", children: "Sign up to get started" }), message && (_jsx("div", { role: "alert", className: "mb-4 text-center text-red-300 font-medium", children: message })), _jsxs("form", { onSubmit: (e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        onSubmit(formData);
                    }, noValidate: true, className: "space-y-5", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-white mb-1", children: "Full Name" }), _jsx("input", { id: "name", name: "name", type: "text", placeholder: "Enter your full name", required: true, className: `w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 border focus:outline-none focus:ring-2 text-white placeholder-gray-200 ${(errors === null || errors === void 0 ? void 0 : errors.name)
                                        ? "border-red-500"
                                        : "border-gray-300 focus:ring-purple-400"}` }), (errors === null || errors === void 0 ? void 0 : errors.name) && (_jsx("p", { className: "mt-1 text-sm text-red-300", children: errors.name }))] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-white mb-1", children: "Email" }), _jsx("input", { id: "email", name: "email", type: "email", placeholder: "Enter your email", required: true, className: `w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 border focus:outline-none focus:ring-2 text-white placeholder-gray-200 ${(errors === null || errors === void 0 ? void 0 : errors.email)
                                        ? "border-red-500"
                                        : "border-gray-300 focus:ring-purple-400"}` }), (errors === null || errors === void 0 ? void 0 : errors.email) && (_jsx("p", { className: "mt-1 text-sm text-red-300", children: errors.email }))] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-white mb-1", children: "Password" }), _jsx("input", { id: "password", name: "password", type: "password", placeholder: "Enter your password", required: true, className: `w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 border focus:outline-none focus:ring-2 text-white placeholder-gray-200 ${(errors === null || errors === void 0 ? void 0 : errors.password)
                                        ? "border-red-500"
                                        : "border-gray-300 focus:ring-purple-400"}` }), (errors === null || errors === void 0 ? void 0 : errors.password) && (_jsx("p", { className: "mt-1 text-sm text-red-300", children: errors.password }))] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password_confirmation", className: "block text-sm font-medium text-white mb-1", children: "Confirm Password" }), _jsx("input", { id: "password_confirmation", name: "password_confirmation", type: "password", placeholder: "Confirm your password", required: true, className: `w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 border focus:outline-none focus:ring-2 text-white placeholder-gray-200 ${(errors === null || errors === void 0 ? void 0 : errors.password_confirmation)
                                        ? "border-red-500"
                                        : "border-gray-300 focus:ring-purple-400"}` }), (errors === null || errors === void 0 ? void 0 : errors.password_confirmation) && (_jsx("p", { className: "mt-1 text-sm text-red-300", children: errors.password_confirmation }))] }), _jsx("button", { type: "submit", className: "w-full py-2 bg-purple-700/80 text-white rounded-lg hover:bg-purple-800 transition", children: "Sign Up" }), _jsxs("div", { className: "flex justify-center gap-4 mt-4", children: [_jsx("button", { type: "button", className: "flex items-center justify-center w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white transition font-bold text-lg", children: "G" }), _jsx("button", { type: "button", className: "flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition font-bold text-lg", children: "F" }), _jsx("button", { type: "button", className: "flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 hover:bg-blue-500 text-white transition font-bold text-lg", children: "T" })] }), _jsxs("p", { className: "text-center text-sm text-gray-200 mt-4", children: ["Already have an account?", " ", _jsx(Link, { href: `/${lang}/login`, className: "underline hover:text-white", scroll: false, children: "Login" })] })] })] }) }));
}
