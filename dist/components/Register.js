"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import UiRegister from "./demo/UiRegister";
export default function Register() {
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState(null);
    const validate = (formData) => {
        var _a, _b, _c, _d;
        const newErrors = {};
        const name = (_a = formData.get("name")) === null || _a === void 0 ? void 0 : _a.toString().trim();
        const email = (_b = formData.get("email")) === null || _b === void 0 ? void 0 : _b.toString().trim();
        const password = (_c = formData.get("password")) === null || _c === void 0 ? void 0 : _c.toString();
        const confirmPassword = (_d = formData.get("confirmPassword")) === null || _d === void 0 ? void 0 : _d.toString();
        if (!name)
            newErrors.name = "Name is required";
        if (!email)
            newErrors.email = "Email is required";
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
    const handleSubmit = (formData) => {
        const validationErrors = validate(formData);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            setMessage(null);
            //   onSubmitServer(formData);
        }
        else {
            setMessage("Please fix the errors below.");
        }
    };
    return (_jsx(UiRegister, { onSubmit: handleSubmit, errors: errors, message: message }));
}
