"use client";

import React from "react";

interface UiLoginProps {
  onSubmit: (formData: FormData) => void;
  errors?: { username?: string; password?: string };
  message?: string | null;
}

export default function CyberpunkLogin({ onSubmit, errors, message }: UiLoginProps) {
  return (
    <div className="w-full max-w-md mx-auto p-8 bg-[#0a0a0a] border border-cyan-500/30 rounded-xl shadow-[0_0_30px_-5px_rgba(0,255,255,0.2)] relative overflow-hidden group">
      
      {/* خطوط نورانی حاشیه‌ای (انیمیشن اسکن) */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500 pointer-events-none -z-10"></div>

      <div className="relative z-10">
        {/* هدر */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-[#111] border border-cyan-500/50 shadow-[0_0_15px_-5px_rgba(0,255,255,0.5)] mb-4">
            <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-wider">SYSTEM ACCESS</h2>
          <p className="text-xs text-cyan-700/80 font-mono mt-1">[ SECURE CONNECTION REQUIRED ]</p>
        </div>

        {/* پیام‌ها */}
        {message && (
          <div className={`mb-6 p-3 rounded bg-[#111] border-l-4 text-sm font-mono ${
            message === "Login successful" 
              ? "border-green-400 text-green-400" 
              : "border-red-500 text-red-400"
          }`}>
            &gt; {message}
          </div>
        )}

        <form action={onSubmit} className="space-y-5">
          {/* نام کاربری */}
          <div>
            <label className="block text-xs font-mono text-cyan-500 mb-1 tracking-widest uppercase">USERNAME</label>
            <input
              name="username"
              type="text"
              placeholder="Enter target"
              className={`w-full px-4 py-2.5 bg-[#0a0a0a] border-b-2 text-cyan-200 outline-none transition-all font-mono placeholder-cyan-800 ${
                errors?.username ? "border-red-500" : "border-cyan-800 focus:border-cyan-400"
              }`}
            />
            {errors?.username && <p className="mt-1.5 text-xs text-red-400 font-mono">&gt; ERROR: {errors.username}</p>}
          </div>

          {/* رمز عبور */}
          <div>
            <label className="block text-xs font-mono text-cyan-500 mb-1 tracking-widest uppercase">PASSWORD</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className={`w-full px-4 py-2.5 bg-[#0a0a0a] border-b-2 text-cyan-200 outline-none transition-all font-mono placeholder-cyan-800 ${
                errors?.password ? "border-red-500" : "border-cyan-800 focus:border-cyan-400"
              }`}
            />
            {errors?.password && <p className="mt-1.5 text-xs text-red-400 font-mono">&gt; ERROR: {errors.password}</p>}
          </div>

          {/* دکمه */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.6)] active:scale-95 transition-all duration-200 uppercase tracking-widest text-sm"
          >
            Execute
          </button>
        </form>
      </div>
    </div>
  );
}