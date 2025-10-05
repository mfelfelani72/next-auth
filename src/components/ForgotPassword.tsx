/*
 * @Author: Arya
 * @Email: c63.helix@gmail.com
 * @Team:
 * @Date: 2025-10-05 14:48
 * @Description:
 */


// این رو درست کن معلوم نیست چی به چیه اینجا ولی کار میکنه


"use client";

import React, { useState } from "react";

// Components

import UiForgotPassword from "./demo/UiForgotPassword";

// Interfaces

import type { LoginInterface, ClientLoginInterface } from "../Interfaces";

export default function ForgotPassword({
  loginRoute,
  onGoogleLogin,
  UiComponent,
  dict,
  lang,
}: LoginInterface & {
  UiComponent?: React.ComponentType<ClientLoginInterface>;
//   اینجا باید چند تا چیز میز باشه تو فایل اینترفیس ولی نیست
}) {
  // States

//   ... از اینجا
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
        body: JSON.stringify({ email: username, password }),
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

//   تا اینجا ...
// کدوم فانکشن ها به درد میخورن؟ چون قرار نیست وارد بشیم میخوایم رمز رو عوض کنیم

  const RenderUi = UiComponent || UiForgotPassword;

  return (
    <>
      <RenderUi
        onSubmit={handleSubmit}
        errors={errors}
        message={message}
        dict={dict}
        lang={lang}
      />

      {loading && (
        <p className="text-center text-gray-200 mt-2">Logging in...</p>
      )}
    </>
  );
}
