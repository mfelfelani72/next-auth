/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-02 08:04:22
 * @Description:
 */

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Interfaces

import { ClientRegisterInterface } from "@/Interfaces";

export default function UiRegister({
  onSubmit,
  errors,
  message,
  dict,
  lang,
}: ClientRegisterInterface) {
  // States
  const [visible, setVisible] = useState(false);

  // Functions

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-black p-4">
      <div
        className={`w-full max-w-md bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/30
          transform transition-all duration-700 ease-out
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        {/* Picture / Logo */}
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

        {/* Register Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            onSubmit(formData);
          }}
          noValidate
          className="space-y-5"
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white mb-1"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              required
              className={`w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 border focus:outline-none focus:ring-2 text-white placeholder-gray-200 ${
                errors?.name
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-purple-400"
              }`}
            />
            {errors?.name && (
              <p className="mt-1 text-sm text-red-300">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className={`w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 border focus:outline-none focus:ring-2 text-white placeholder-gray-200 ${
                errors?.email
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-purple-400"
              }`}
            />
            {errors?.email && (
              <p className="mt-1 text-sm text-red-300">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
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

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-medium text-white mb-1"
            >
              Confirm Password
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              placeholder="Confirm your password"
              required
              className={`w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 border focus:outline-none focus:ring-2 text-white placeholder-gray-200 ${
                errors?.password_confirmation
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-purple-400"
              }`}
            />
            {errors?.password_confirmation && (
              <p className="mt-1 text-sm text-red-300">
                {errors.password_confirmation}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-700/80 text-white rounded-lg hover:bg-purple-800 transition"
          >
            Sign Up
          </button>

          {/* Social Register Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white transition font-bold text-lg"
            >
              G
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition font-bold text-lg"
            >
              F
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 hover:bg-blue-500 text-white transition font-bold text-lg"
            >
              T
            </button>
          </div>

          {/* Link to Login */}
          <p className="text-center text-sm text-gray-200 mt-4">
            Already have an account?{" "}
            <Link
              href={`/${lang}/login`}
              className="underline hover:text-white"
              scroll={false}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
