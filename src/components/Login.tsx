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

export default function Login({
  loginRoute,
  onGoogleLogin,
  UiComponent,
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
      <div className="relative min-h-screen w-full flex items-center justify-center bg-[#09090b] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-200 h-200 bg-linear-to-br from-indigo-600/30 via-purple-600/20 to-transparent rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />

          <div className="absolute -bottom-40 -left-40 w-200 h-200 bg-linear-to-tr from-emerald-500/20 via-blue-500/10 to-transparent rounded-full blur-[120px] animate-pulse-slow delay-1000 pointer-events-none" />

          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
        </div>

        <div className="relative z-10 w-full max-w-md px-4">
          <RenderUi onSubmit={handleSubmit} errors={errors} message={message} />

          {loading && (
            <p className="text-center text-gray-400 mt-6 text-sm animate-pulse">
              Authenticating...
            </p>
          )}

          {onGoogleLogin && (
            <div className="flex justify-center mt-6 relative z-10">
              <button
                onClick={onGoogleLogin}
                className="px-6 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 rounded-full hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 text-sm font-medium flex items-center gap-2 shadow-lg"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Sign in with Google
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
