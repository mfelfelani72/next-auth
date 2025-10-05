"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ClientLoginInterface } from "@/Interfaces";

export default function UiForgotPassword({
  onSubmit,
  errors,
  message,
  dict,
}: ClientLoginInterface) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tl from-amber-50 to-slate-50 dark:from-slate-950 dark:to-gray-900 px-4 transition-colors duration-300">
      <div
        className={`w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-sm dark:border-gray-700 p-8 
          transform transition-all duration-700 ease-out
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        {/* Logo */}
        <div className="flex justify-center mb-6 bg-gradient-to-tr from-cyan-300 to-yellow-200 items-center w-30 m-auto aspect-square rounded-full">
          {/* <Image
            src="/logo.png"
            alt="Logo"
            width={72}
            height={72}
            className="rounded-full shadow"
          /> */}
          AR
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
          Forgot Password?
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 text-sm">
          Lost your password? Please enter your email address. You will receive
          a link to create a new password via email.
        </p>

        {message && (
          <div
            role="alert"
            className="mb-4 text-center text-red-500 font-medium text-sm"
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
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              {dict.login.username}
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder={dict.login.enter_your_username}
              required
              className={`w-full px-4 py-2 rounded-lg border text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 
                focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400
                ${
                  errors?.username
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400"
                }`}
            />
            {errors?.username && (
              <p className="mt-1 text-sm text-red-500">{errors.username}</p>
            )}
          </div>
          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              {dict.login.password}
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder={dict.login.enter_your_password}
              required
              className={`w-full px-4 py-2 rounded-lg border text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 
                focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400
                ${
                  errors?.password
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400"
                }`}
            />
            {errors?.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-lg transition"
          >
            Request
          </button>
          {/* Links */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
            Back to login{" "}
            <Link
              href="/en/login"
              className="underline font-medium text-[#06b6d4] dark:text-[#057f95] hover:text-[#268a9c] dark:hover:text-[#0cacc8]"
              scroll={false}
            >
              login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
