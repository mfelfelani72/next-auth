"use client";

import React, { useState, useMemo, ComponentType, lazy } from "react";
import { cn } from "forma-li";
import type { RegisterProps, RegisterComponentProps } from "@/types";

const LazyTwoColumn = lazy(
  () => import("@/components/demo/auth/layouts/twoColumn/RegisterLanding"),
);

const LAYOUT_MAP: Record<string, ComponentType<RegisterComponentProps>> = {
  twoColumn: LazyTwoColumn,
};

export default function Register({
  layout = "twoColumn",
  theme,
  className,
}: RegisterProps) {
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const [message, setMessage] = useState<string | null>(null);

  const validate = (formData: FormData) => {
    const newErrors: typeof errors = {};
    // const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString();
    const confirmPassword = formData.get("confirmPassword")?.toString();

    // if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Invalid email format";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!confirmPassword) newErrors.confirmPassword = "Confirm your password";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = async (formData: FormData) => {
    setMessage(null);
    setErrors({});

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setMessage("Please fix the errors below.");

      console.log(errors);
      console.log(message);
      return;
    }

    try {
      // const name = formData.get("name")?.toString().trim();
      const name = "sky";
      const email = formData.get("email")?.toString().trim();
      const password = formData.get("password")?.toString();
      const confirmPassword = formData.get("confirmPassword")?.toString();

      console.log(formData);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, confirmPassword }),
      });
      const data = await res.json();

      if (!res.ok) {
        setMessage(data?.message || "Registration failed");
        return;
      }

      setMessage(data?.message || "Registration successful");
    } catch (err: any) {
      setMessage(err?.message || "Network error");
    }
  };

  const RenderUi = useMemo(() => {
    return LAYOUT_MAP[layout] || LAYOUT_MAP.twoColumn;
  }, [layout]);

  return (
    <div
      style={{
        backgroundImage: `url('/images/jpg/${theme || "default"}_auth.jpeg')`,
      }}
      className={cn(
        "z-10 w-full max-w-md px-4 max-h-screen bg-cover bg-center bg-fixed overflow-hidden",
        className,
      )}
    >
      <RenderUi
        onSubmit={handleSubmit}
        errors={errors}
        message={message}
        theme={theme}
      />
    </div>
  );
}
