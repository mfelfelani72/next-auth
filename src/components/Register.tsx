/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-02 06:57:46
 * @Description:
 */

"use client";

import React, { useState } from "react";

// Components
import UiRegister from "./demo/UiRegister";

// Interfaces
import type { RegisterInterface, ClientRegisterInterface } from "../Interfaces";

export default function Register({
  registerRoute,
  onGoogleRegister,
  UiComponent,
  dict,
  lang,
}: RegisterInterface & {
  UiComponent?: React.ComponentType<ClientRegisterInterface>;
}) {
  // States
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Functions
  const handleSubmit = async (formData: FormData) => {
    setMessage(null);
    setErrors({});

    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const password = (formData.get("password") as string) || "";
    const confirmPassword = (formData.get("confirmPassword") as string) || "";

    const newErrors: typeof errors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    else if (name.length < 2)
      newErrors.name = "Name must be at least 2 characters";

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setMessage("Please fix the errors below.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(registerRoute, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation: confirmPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data?.message || "Registration failed");
        return;
      }

      setMessage(data?.message || "Registration successful");
    } catch (err: any) {
      setMessage(err?.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  const RenderUi = UiComponent || UiRegister;

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
        <p className="text-center text-gray-200 mt-2">Registering...</p>
      )}

      {onGoogleRegister && (
        <div className="flex justify-center mt-4">
          <button
            onClick={onGoogleRegister}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Sign up with Google
          </button>
        </div>
      )}
    </>
  );
}
