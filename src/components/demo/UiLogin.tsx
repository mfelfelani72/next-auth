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

import { ClientLoginInterface } from "@/Interfaces";

export default function UiLogin({
  onSubmit,
  errors,
  message,
  dict,
  lang,
}: ClientLoginInterface) {
  // States
  const [visible, setVisible] = useState(false);

  // Functions

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-black p-4 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <div
        className={`w-full max-w-md bg-white/20 dark:bg-black/30 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/30 dark:border-gray-700
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
        <h1 className="text-2xl font-bold text-center text-white dark:text-gray-100 mb-2">
          {dict.login.welcom}
        </h1>
        <p className="text-center text-gray-200 dark:text-gray-400 mb-6 text-sm">
          {dict.login.login_credentials}
        </p>

        {message && (
          <div
            role="alert"
            className="mb-4 text-center text-red-300 font-medium"
          >
            {message}
          </div>
        )}

        {/* Login Form */}
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
              htmlFor="username"
              className="block text-sm font-medium text-white dark:text-gray-200 mb-1"
            >
              {dict.login.username}
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder={dict.login.enter_your_username}
              required
              className={`w-full px-4 py-2 rounded-lg bg-white/20 dark:bg-black/40 focus:bg-white/30 dark:focus:bg-black/50 border focus:outline-none focus:ring-2 text-white placeholder-gray-200 ${
                errors?.username
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-purple-400 dark:border-gray-700 dark:focus:ring-purple-500"
              }`}
            />
            {errors?.username && (
              <p className="mt-1 text-sm text-red-300">{errors.username}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white dark:text-gray-200 mb-1"
            >
              {dict.login.password}
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder={dict.login.enter_your_password}
              required
              className={`w-full px-4 py-2 rounded-lg bg-white/20 dark:bg-black/40 focus:bg-white/30 dark:focus:bg-black/50 border focus:outline-none focus:ring-2 text-white placeholder-gray-200 ${
                errors?.password
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-purple-400 dark:border-gray-700 dark:focus:ring-purple-500"
              }`}
            />
            {errors?.password && (
              <p className="mt-1 text-sm text-red-300">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-700/80 dark:bg-purple-600/80 text-white rounded-lg hover:bg-purple-800 dark:hover:bg-purple-700 transition"
          >
            {dict.login.log_in}
          </button>

          {/* Social Login Buttons */}
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

          {/* Link to Register */}
          <p className="text-center text-sm text-gray-200 dark:text-gray-400 mt-4">
            {dict.login.dont_have_an_account}{" "}
            <Link
              href="/en/register"
              className="underline hover:text-white dark:hover:text-gray-100"
              scroll={false}
            >
              {dict.login.register}
            </Link>
          </p>
          <p className="text-center text-sm text-gray-200 dark:text-gray-400 mt-4">
            {dict.login.forgot_your_password}{" "}
            <Link
              href="/en/forgotpassword"
              className="underline hover:text-white dark:hover:text-gray-100"
            >
              {dict.login.reset}
            </Link>
          </p>
          <p className="text-center text-sm text-gray-200 dark:text-gray-400 mt-4">
            {dict.login.want_to_change_your_password}{" "}
            <Link
              href="/en/changepassword"
              className="underline hover:text-white dark:hover:text-gray-100"
            >
              {dict.login.change}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
