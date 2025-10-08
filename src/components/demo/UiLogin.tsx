"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ClientLoginInterface } from "@/Interfaces";

export default function UiLogin({
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-slate-50 dark:from-slate-950 dark:to-gray-900 px-4 transition-colors duration-300">
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
          {dict.login.welcom}
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 text-sm">
          {dict.login.login_credentials}
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
            {dict.login.login}
          </button>

          {/* Social Login */}
          <div className="flex justify-center gap-3 mt-4">
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 rounded-md bg-[#f472b6] hover:bg-red-600 text-white transition"
              aria-label="Login with Google"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48">
                <path
                  fill="#fff"
                  d="M44.5 20H24v8.5h11.8C34.8 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.1 4.6 29.4 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 21-7.6 21-21 0-1.3-.1-2.2-.5-4z"
                />
              </svg>
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 rounded-md bg-[#0ea5e9] hover:bg-blue-700 text-white transition"
              aria-label="Login with Facebook"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path
                  d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 
   23.4.6 24 1.326 24H12.82V14.708h-3.29v-3.622h3.29V8.413
   c0-3.258 1.99-5.032 4.897-5.032 1.39 0 2.582.103 
   2.93.149v3.4h-2.012c-1.58 0-1.888.752-1.888 
   1.854v2.423h3.774l-.492 3.622h-3.282V24h6.437c.727 
   0 1.327-.6 1.327-1.326V1.326C24 .6 23.4 0 
   22.675 0z"
                />
              </svg>
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 rounded-md bg-[#06b6d4] hover:bg-sky-500 text-white transition"
              aria-label="Login with Twitter"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.933 4.933 0 0 0 23.337 3a9.864 9.864 0 0 1-3.127 1.196 4.916 4.916 0 0 0-8.38 4.482A13.953 13.953 0 0 1 1.671 3.149a4.917 4.917 0 0 0 1.523 6.573 4.897 4.897 0 0 1-2.228-.616v.06a4.917 4.917 0 0 0 3.946 4.827 4.903 4.903 0 0 1-2.224.085 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.936 13.936 0 0 0 7.548 2.212c9.057 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
              </svg>
            </button>
          </div>
          {/* Links */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
            {dict.login.dont_have_an_account}{" "}
            <Link
              href="/en/register"
              className="underline font-medium text-[#06b6d4] dark:text-[#057f95] hover:text-[#268a9c] dark:hover:text-[#0cacc8]"
              scroll={false}
            >
              {dict.login.register}
            </Link>
          </p>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
            {dict.login.forgot_your_password}{" "}
            <Link
              href="/en/forgotpassword"
              className="underline font-medium text-[#06b6d4] dark:text-[#057f95] hover:text-[#268a9c] dark:hover:text-[#0cacc8]"
            >
              {dict.login.reset}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
