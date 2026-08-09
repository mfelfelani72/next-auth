"use client";

import React from "react";

interface UiLoginProps {
  onSubmit: (formData: FormData) => void;
  errors?: { username?: string; password?: string };
  message?: string | null;
}

export default function NotchLogin({
  onSubmit,
  errors,
  message,
}: UiLoginProps) {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      
      {/* افکت پس‌زمینه محو شده در اطراف کارت (Glow effect) */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2.5rem] blur-xl opacity-30 animate-pulse"></div>

      {/* کارت اصلی */}
      <div className="relative bg-[#0f1115] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-xl overflow-hidden">
        
        {/* --- نوار بالای کارت (شبیه به نوار گوشی/Notch) --- */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl flex items-center justify-center gap-1.5 pt-1 border-t border-gray-800">
          <div className="w-2 h-2 rounded-full bg-gray-700"></div>
          <div className="w-8 h-1.5 rounded-full bg-gray-800"></div>
        </div>

        {/* --- آیکون و هدر --- */}
        <div className="text-center mt-4 mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)] mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Secure Access</h2>
          <p className="text-sm text-gray-400 mt-1 font-light">Protected by advanced encryption</p>
        </div>

        {/* --- باکس پیام --- */}
        {message && (
          <div
            className={`mb-6 p-3 rounded-xl border text-sm font-medium text-center backdrop-blur-sm transition-all ${
              message === "Login successful"
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_-5px_rgba(16,185,129,0.3)]"
                : "bg-rose-500/10 border-rose-500/30 text-rose-400 shadow-[0_0_15px_-5px_rgba(244,63,94,0.3)]"
            }`}
          >
            {message}
          </div>
        )}

        {/* --- فرم --- */}
        <form action={onSubmit} className="space-y-6">
          
          <div>
            <label htmlFor="username" className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
              User ID
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                className={`w-full pl-10 pr-4 py-3 bg-[#1a1d24] border rounded-xl text-gray-200 placeholder-gray-600 outline-none transition-all duration-300 ${
                  errors?.username
                    ? "border-rose-500 ring-1 ring-rose-500/30"
                    : "border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 hover:border-gray-600"
                }`}
              />
            </div>
            {errors?.username && (
              <p className="mt-1.5 text-xs text-rose-400 font-medium flex items-center gap-1">
                <span>⛔</span> {errors.username}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
              Passcode
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className={`w-full pl-10 pr-4 py-3 bg-[#1a1d24] border rounded-xl text-gray-200 placeholder-gray-600 outline-none transition-all duration-300 ${
                  errors?.password
                    ? "border-rose-500 ring-1 ring-rose-500/30"
                    : "border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 hover:border-gray-600"
                }`}
              />
            </div>
            {errors?.password && (
              <p className="mt-1.5 text-xs text-rose-400 font-medium flex items-center gap-1">
                <span>⛔</span> {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-900/40 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Unlock Access</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </button>

        </form>
      </div>
    </div>
  );
}