"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useMemo, lazy } from "react";
import { cn } from "forma-li";
const LazyTwoColumn = lazy(() => import("../../../components/demo/auth/layouts/twoColumn/RegisterLanding"));
const LAYOUT_MAP = {
    twoColumn: LazyTwoColumn,
};
export default function Register({ layout = "twoColumn", theme, className, }) {
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState(null);
    const validate = (formData) => {
        var _a, _b, _c;
        const newErrors = {};
        // const name = formData.get("name")?.toString().trim();
        const email = (_a = formData.get("email")) === null || _a === void 0 ? void 0 : _a.toString().trim();
        const password = (_b = formData.get("password")) === null || _b === void 0 ? void 0 : _b.toString();
        const confirmPassword = (_c = formData.get("confirmPassword")) === null || _c === void 0 ? void 0 : _c.toString();
        // if (!name) newErrors.name = "Name is required";
        if (!email)
            newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            newErrors.email = "Invalid email format";
        if (!password)
            newErrors.password = "Password is required";
        else if (password.length < 6)
            newErrors.password = "Password must be at least 6 characters";
        if (!confirmPassword)
            newErrors.confirmPassword = "Confirm your password";
        else if (password !== confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";
        return newErrors;
    };
    const handleSubmit = async (formData) => {
        var _a, _b, _c;
        setMessage(null);
        setErrors({});
        const validationErrors = validate(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setMessage("Please fix the errors below.");
            return;
        }
        try {
            // const name = formData.get("name")?.toString().trim();
            const name = "sky";
            const email = (_a = formData.get("email")) === null || _a === void 0 ? void 0 : _a.toString().trim();
            const password = (_b = formData.get("password")) === null || _b === void 0 ? void 0 : _b.toString();
            const confirmPassword = (_c = formData.get("confirmPassword")) === null || _c === void 0 ? void 0 : _c.toString();
            console.log(formData);
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, confirmPassword }),
            });
            const data = await res.json();
            if (!res.ok) {
                setMessage((data === null || data === void 0 ? void 0 : data.message) || "Registration failed");
                return;
            }
            setMessage((data === null || data === void 0 ? void 0 : data.message) || "Registration successful");
        }
        catch (err) {
            setMessage((err === null || err === void 0 ? void 0 : err.message) || "Network error");
        }
    };
    const RenderUi = useMemo(() => {
        return LAYOUT_MAP[layout] || LAYOUT_MAP.twoColumn;
    }, [layout]);
    return (_jsx("div", { style: {
            backgroundImage: `url('/images/jpg/${theme || "default"}_auth.jpeg')`,
        }, className: cn("z-10 w-full max-w-md px-4 max-h-screen bg-cover bg-center bg-fixed overflow-hidden", className), children: _jsx(RenderUi, { onSubmit: handleSubmit, errors: errors, message: message, theme: theme }) }));
}
