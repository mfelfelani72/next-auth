"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ChangePasswordProps {
  onSubmit: (formData: FormData) => void;
  errors?: { password?: string; confirmPassword?: string };
  message?: string | null;
  visible?: boolean;
}

export default function UiChangePassword({
  onSubmit,
  errors,
  message,
  visible = true,
}: ChangePasswordProps) {
  return (
    <div className="fixed inset-0 overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-black p-4">
      <div
        className={`w-full max-w-md bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/30
          transform transition-all duration-700 ease-out
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full shadow"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-white mb-2">
          Change Password
        </h1>
        <p className="text-center text-gray-200 mb-6 text-sm">
          Enter your new password below
        </p>

        {message && (
          <div
            role="alert"
            className="mb-4 text-center text-red-300 font-medium"
          >
            {message}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            onSubmit(formData);
          }}
          noValidate
          className="space-y-5"
        >
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white mb-1"
            >
              New Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter new password"
              required
              className={`w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 border focus:outline-none focus:ring-2 text-white placeholder-gray-200 ${
                errors?.password
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-purple-400"
              }`}
            />
            {errors?.password && (
              <p className="mt-1 text-sm text-red-300">{errors.password}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-white mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm new password"
              required
              className={`w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 border focus:outline-none focus:ring-2 text-white placeholder-gray-200 ${
                errors?.confirmPassword
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-purple-400"
              }`}
            />
            {errors?.confirmPassword && (
              <p className="mt-1 text-sm text-red-300">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-700/80 text-white rounded-lg hover:bg-purple-800 transition"
          >
            Update Password
          </button>

          {/* Links */}
          <p className="text-center text-sm text-gray-200 mt-4">
            Remembered your password?{" "}
            <Link href="/en/login" className="underline hover:text-white">
              Back to Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
