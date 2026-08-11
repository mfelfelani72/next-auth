/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-12-31 06:00:17
 * @Description:
 */

"use client";

import React, { useState } from "react";

// Components

import UiLogin from "./demo/UiLogin";

// Interfaces

import type { LoginProps } from "../types";
import LanguageSwitcher from "./base/LanguageSwitcher";

interface LoginComponentProps {
  onSubmit: (formData: FormData) => void;
  errors?: { username?: string; password?: string };
  message?: string | null;
}

// Functions

import { cn, debounce } from "forma-li";

export default function Login({
  loginRoute,
  UiComponent,
  className,
}: LoginProps & { UiComponent?: React.ComponentType<LoginComponentProps> }) {
  // States

  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Functions

  const handleSubmit = async (formData: FormData) => {
    setMessage(null);
    setErrors({});

    const email = (formData.get("username") as string) || "";
    const password = (formData.get("password") as string) || "";

    const newErrors: typeof errors = {};

    if (!email.trim()) newErrors.username = "Username is required";
    else if (email.length < 3)
      newErrors.username = "Username must be at least 3 characters";

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

  const RenderUi = UiComponent || UiLogin;

  return (
    <>
      {/* <div className="absolute inset-0 p-4 z-900">
      <LanguageSwitcher />
    </div> */}

      <div className={cn("relative z-10 w-full max-w-md px-4", className)}>
        <RenderUi onSubmit={handleSubmit} errors={errors} message={message} />
      </div>
    </>
  );
}
