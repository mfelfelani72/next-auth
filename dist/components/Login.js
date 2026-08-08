"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
// Components
import UiLogin from "./demo/UiLogin";
export default function Login({ loginRoute, onGoogleLogin, UiComponent, // ⬅️ اضافه شد
 }) {
    // states
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    // functions
    const handleSubmit = async (formData) => {
        setMessage(null);
        setErrors({});
        const username = formData.get("username") || "";
        const password = formData.get("password") || "";
        const newErrors = {};
        if (!username.trim())
            newErrors.username = "Username is required";
        else if (username.length < 3)
            newErrors.username = "Username must be at least 3 characters";
        if (!password)
            newErrors.password = "Password is required";
        else if (password.length < 6)
            newErrors.password = "Password must be at least 6 characters";
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setMessage("Please fix the errors below.");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch(loginRoute, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            const data = await res.json();
            if (!res.ok) {
                setMessage((data === null || data === void 0 ? void 0 : data.message) || "Login failed");
                return;
            }
            setMessage((data === null || data === void 0 ? void 0 : data.message) || "Login successful");
        }
        catch (err) {
            setMessage((err === null || err === void 0 ? void 0 : err.message) || "Network error");
        }
        finally {
            setLoading(false);
        }
    };
    // ✅ اگر UiComponent پاس داده شده باشه، اون استفاده میشه
    const RenderUi = UiComponent || UiLogin;
    return (_jsxs(_Fragment, { children: [_jsx(RenderUi, { onSubmit: handleSubmit, errors: errors, message: message }), loading && (_jsx("p", { className: "text-center text-gray-200 mt-2", children: "Logging in..." })), onGoogleLogin && (_jsx("div", { className: "flex justify-center mt-4", children: _jsx("button", { onClick: onGoogleLogin, className: "px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition", children: "Sign in with Google" }) }))] }));
}
