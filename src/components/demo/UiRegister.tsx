"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface UiRegisterProps {
  onSubmit: (formData: FormData) => void;
  errors?: {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
  message?: string | null;
}

export default function UiRegister({
  onSubmit,
  errors,
  message,
}: UiRegisterProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-black p-4">
      <div
        className={`w-full max-w-md bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/30 transform transition-all duration-700 ease-out ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full shadow"
          />
        </div>

        <h1 className="text-2xl font-bold text-center text-white mb-2">
          Create Account
        </h1>
        <p className="text-center text-gray-200 mb-6 text-sm">
          Sign up to get started
        </p>

        {message && (
          <div
            role="alert"
            className="mb-4 text-center text-red-300 font-medium"
          >
            {message}
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(new FormData(e.currentTarget));
          }}
          className="space-y-5"
        >
          <div>
            <input
              name="name"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 border border-transparent focus:border-white/50 focus:outline-none transition-colors"
            />
            {errors?.name && (
              <p className="text-red-300 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 border border-transparent focus:border-white/50 focus:outline-none transition-colors"
            />
            {errors?.email && (
              <p className="text-red-300 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 border border-transparent focus:border-white/50 focus:outline-none transition-colors"
            />
            {errors?.password && (
              <p className="text-red-300 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 border border-transparent focus:border-white/50 focus:outline-none transition-colors"
            />
            {errors?.confirmPassword && (
              <p className="text-red-300 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-700/80 text-white rounded-lg hover:bg-purple-800 transition font-medium"
          >
            Sign Up
          </button>
        </form>

        <div className="flex justify-center gap-4 mt-4">
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold text-lg transition">
            G
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition">
            F
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 hover:bg-blue-500 text-white font-bold text-lg transition">
            T
          </button>
        </div>

        <p className="text-center text-sm text-gray-200 mt-4">
          Already have an account?{" "}
          <Link
            href="/en/login"
            className="underline hover:text-white transition-colors"
            scroll={false}
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
