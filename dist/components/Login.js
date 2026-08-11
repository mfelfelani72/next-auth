/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-12-31 06:00:17
 * @Description:
 */
"use client";
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
// Components
import UiLogin from "./demo/UiLogin";
export default function Login({ loginRoute, UiComponent, }) {
    // States
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    // Functions
    const handleSubmit = async (formData) => {
        setMessage(null);
        setErrors({});
        const email = formData.get("username") || "";
        const password = formData.get("password") || "";
        const newErrors = {};
        if (!email.trim())
            newErrors.username = "Username is required";
        else if (email.length < 3)
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
                body: JSON.stringify({ email, password }),
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
    const RenderUi = UiComponent || UiLogin;
    return (_jsx(_Fragment, { children: _jsx("div", { className: "relative z-10 w-full max-w-md px-4", children: _jsx(RenderUi, { onSubmit: handleSubmit, errors: errors, message: message }) }) }));
}
