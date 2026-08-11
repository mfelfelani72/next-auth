"use client";

import React, { useState } from "react";
import { cn } from "forma-li";
import type { LoginProps, LoginComponentProps } from "@/types";

export default function Login({
  loginRoute,
  UiComponent,
  className,
}: LoginProps) {
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setMessage(null);
    setErrors({});

    const email = (formData.get("email") as string) || "";
    const password = (formData.get("password") as string) || "";

    const newErrors: typeof errors = {};

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Invalid email format";

    if (!password) newErrors.password = "Password is required";
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
        setMessage(data?.message || "Login failed");
        return;
      }

      setMessage(data?.message || "Login successful");
    } catch (err: any) {
      setMessage(err?.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  const RenderUi = UiComponent || (() => <div>No UI component provided</div>);

  return (
    <div className={cn("relative z-10 w-full max-w-md px-4", className)}>
      <RenderUi
        onSubmit={handleSubmit}
        errors={errors}
        message={message}
      />
    </div>
  );
}