"use client";

import React, { useState } from "react";

// Components
import UiLogin from "./UiLogin";

// Interfaces
import type { LoginProps } from "../types";

interface LoginComponentProps {
  onSubmit: (formData: FormData) => void;
  errors?: { username?: string; password?: string };
  message?: string | null;
}

export default function Login({
  loginRoute,
  onGoogleLogin,
  UiComponent, // ⬅️ اضافه شد
}: LoginProps & { UiComponent?: React.ComponentType<LoginComponentProps> }) {
  // states
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // functions
  const handleSubmit = async (formData: FormData) => {
    setMessage(null);
    setErrors({});

    const username = (formData.get("username") as string) || "";
    const password = (formData.get("password") as string) || "";

    const newErrors: typeof errors = {};

    if (!username.trim()) newErrors.username = "Username is required";
    else if (username.length < 3)
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
        body: JSON.stringify({ username, password }),
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

  // ✅ اگر UiComponent پاس داده شده باشه، اون استفاده میشه
  const RenderUi = UiComponent || UiLogin;

  return (
    <>
      <RenderUi onSubmit={handleSubmit} errors={errors} message={message} />

      {loading && (
        <p className="text-center text-gray-200 mt-2">Logging in...</p>
      )}

      {onGoogleLogin && (
        <div className="flex justify-center mt-4">
          <button
            onClick={onGoogleLogin}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Sign in with Google
          </button>
        </div>
      )}
    </>
  );
}
