"use client";

import React, { useState } from "react";
import ClientLogin from "./ClientLogin";

interface ServerLoginProps {
  loginRoute: string; // مثال: "/api/auth/login"
  onGoogleLogin?: () => void;
}

export default function ServerLogin({
  loginRoute,
  onGoogleLogin,
}: ServerLoginProps) {
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    // پاک کردن پیام قبلی
    setMessage(null);
    setErrors({});

    const username = (formData.get("username") as string) || "";
    const password = (formData.get("password") as string) || "";

    // validation ساده
    const newErrors: typeof errors = {};
    if (!username.trim()) newErrors.username = "Username is required";
    else if (username.length < 3)
      newErrors.username = "Username must be at least 3 characters";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // پیام عمومی بالای فرم — کاربر واضح ببینه چه اتفاقی افتاده
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
        // سرور پیام خطا ارسال کرده
        setMessage(data?.message || "Login failed");
        return;
      }

      // موفقیت — پیام یا redirect انجام بدی
      setMessage(data?.message || "Login successful");
      // مثال: اگر میخوای ریدایرکت کنی:
      // if (data?.redirectTo) router.push(data.redirectTo);
    } catch (err: any) {
      setMessage(err?.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ClientLogin onSubmit={handleSubmit} errors={errors} message={message} />
      {/* اگر لازم می‌دونی می‌تونی لِیودینگ global اینجا هم نمایش بدی */}
      {loading && (
        <p className="text-center text-gray-200 mt-2">Logging in...</p>
      )}

      {/* دکمه گوگل در صورت نیاز */}
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
