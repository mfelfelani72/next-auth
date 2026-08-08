"use client";

import React from "react";

interface UiLoginProps {
  onSubmit: (formData: FormData) => void;
  errors?: { username?: string; password?: string };
  message?: string | null;
}

export default function UiLogin2({ onSubmit, errors, message }: UiLoginProps) {
  return (
    <div className="relative w-full max-w-md mx-auto p-8 rounded-3xl bg-[#0f1115]/90 border border-white/5 shadow-[0_0_50px_-10px_rgba(99,102,241,0.15)] backdrop-blur-xl overflow-hidden">
      
      {/* خطوط نورانی دکوراتیو در پس‌زمینه */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        {/* هدر با طراحی مینیمال */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/30 mb-4">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-light tracking-wide text-white">Access Portal</h2>
          <p className="text-sm font-light text-gray-500 mt-1">Enter your credentials</p>
        </div>

        {/* باکس پیام با طراحی ساده و شیک */}
        {message && (
          <div
            className={`mb-6 p-3 rounded-xl border text-sm font-light text-center transition-all ${
              message === "Login successful"
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                : "bg-rose-500/10 border-rose-500/30 text-rose-400"
            }`}
          >
            {message}
          </div>
        )}

        <form action={onSubmit} className="space-y-6">
          
          {/* فیلد نام کاربری با خط جداکننده زیرین */}
          <div className="group">
            <label htmlFor="username" className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2 ml-1">
              Username
            </label>
            <div className="relative">
              <input
                id="username"
                name="username"
                type="text"
                placeholder="johndoe"
                className={`w-full bg-transparent py-3 px-1 text-gray-200 placeholder-gray-600 border-b-2 outline-none transition-all duration-300 ${
                  errors?.username
                    ? "border-rose-500"
                    : "border-gray-700 focus:border-indigo-400 group-hover:border-gray-500"
                }`}
              />
              {/* خط نورانی زیر فیلد در حالت فوکوس (جلوه نئون) */}
              <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-500 w-0 group-focus-within:w-full ${errors?.username ? '!w-full !bg-rose-500' : ''}`}></div>
            </div>
            {errors?.username && (
              <p className="mt-2 text-xs text-rose-400 font-light flex items-center gap-1 ml-1">
                <span className="text-[10px]">ⓘ</span> {errors.username}
              </p>
            )}
          </div>

          {/* فیلد رمز عبور */}
          <div className="group">
            <label htmlFor="password" className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2 ml-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className={`w-full bg-transparent py-3 px-1 text-gray-200 placeholder-gray-600 border-b-2 outline-none transition-all duration-300 ${
                  errors?.password
                    ? "border-rose-500"
                    : "border-gray-700 focus:border-indigo-400 group-hover:border-gray-500"
                }`}
              />
              <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-500 w-0 group-focus-within:w-full ${errors?.password ? '!w-full !bg-rose-500' : ''}`}></div>
            </div>
            {errors?.password && (
              <p className="mt-2 text-xs text-rose-400 font-light flex items-center gap-1 ml-1">
                <span className="text-[10px]">ⓘ</span> {errors.password}
              </p>
            )}
          </div>

          {/* دکمه با افکت لبه‌های نورانی */}
          <div className="pt-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <button
              type="submit"
              className="relative w-full py-3.5 bg-[#1e2128] text-white font-medium tracking-wide rounded-xl border border-white/10 shadow-inner hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.4)] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Sign In
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}