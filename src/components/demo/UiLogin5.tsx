"use client";

import React from "react";

interface UiLoginProps {
  onSubmit: (formData: FormData) => void;
  errors?: { username?: string; password?: string };
  message?: string | null;
}

export default function UiLogin2({ onSubmit, errors, message }: UiLoginProps) {
  return (
    <div className="relative w-full max-w-sm mx-auto p-6 rounded-2xl bg-[#09090b] border border-white/10 shadow-2xl">
      
      {/* --- هدر با طراحی بسیار مینیمال --- */}
      <div className="text-center mb-8">
        <h2 className="text-xl font-medium tracking-tight text-white">Sign in</h2>
        <p className="text-sm font-normal text-gray-500 mt-1">Welcome back, please enter your details.</p>
      </div>

      {/* --- باکس پیام (حذف رنگ‌های شلوغ، فقط خط باریک کناری) --- */}
      {message && (
        <div
          className={`mb-6 p-3 rounded-lg bg-white/5 border-l-4 text-sm text-center ${
            message === "Login successful"
              ? "border-emerald-400 text-emerald-400"
              : "border-rose-400 text-rose-400"
          }`}
        >
          {message}
        </div>
      )}

      <form action={onSubmit} className="space-y-5">
        
        {/* --- فیلد نام کاربری --- */}
        <div>
          <label htmlFor="username" className="block text-xs font-medium text-gray-400 mb-1.5">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="johndoe"
            className={`w-full px-4 py-2.5 rounded-lg bg-[#121212] border text-gray-200 placeholder-gray-600 outline-none transition-all duration-200 ${
              errors?.username
                ? "border-rose-500/70"
                : "border-white/10 focus:border-indigo-500/70"
            }`}
          />
          {errors?.username && (
            <p className="mt-1.5 text-xs text-rose-400">{errors.username}</p>
          )}
        </div>

        {/* --- فیلد رمز عبور --- */}
        <div>
          <label htmlFor="password" className="block text-xs font-medium text-gray-400 mb-1.5">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            className={`w-full px-4 py-2.5 rounded-lg bg-[#121212] border text-gray-200 placeholder-gray-600 outline-none transition-all duration-200 ${
              errors?.password
                ? "border-rose-500/70"
                : "border-white/10 focus:border-indigo-500/70"
            }`}
          />
          {errors?.password && (
            <p className="mt-1.5 text-xs text-rose-400">{errors.password}</p>
          )}
        </div>

        {/* --- دکمه Submit (بسیار تمیز و بدون سایه‌های اضافی) --- */}
        <button
          type="submit"
          className="w-full py-2.5 mt-2 bg-white text-[#09090b] font-medium rounded-lg hover:bg-gray-200 active:scale-[0.98] transition-all duration-200"
        >
          Sign In
        </button>

      </form>
    </div>
  );
}