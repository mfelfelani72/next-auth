/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-04 11:48:20
 * @Description:
 */

"use client";

import React, { useState, useMemo, ComponentType, lazy } from "react";

// Components

const LazyTwoColumn = lazy(
  () => import("@/components/demo/auth/layouts/twoColumn/LoginLanding"),
);

// Constants

const LAYOUT_MAP: Record<string, ComponentType<LoginComponentProps>> = {
  twoColumn: LazyTwoColumn,
};

// Functions

import { cn } from "forma-li";

// Types

import type { LoginProps, LoginComponentProps } from "@/types";

export default function Login({ layout, theme, className }: LoginProps) {
  // States

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const [message, setMessage] = useState<string | null>(null);

  // Functions

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

    try {
      const res = await fetch("/api/auth/login", {
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
    } 
  };

  const RenderUi = useMemo(() => {
    return LAYOUT_MAP[layout || ""] || LAYOUT_MAP.twoColumn;
  }, [layout]);

  return (
    <div
      style={{
        backgroundImage: `url('/images/jpg/${theme || "default"}_auth.jpeg')`,
      }}
      className={cn(
        "zz-10 w-full max-w-md px-4 max-h-screen bg-cover bg-center bg-fixed overflow-hidden",
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
