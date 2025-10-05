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
    <div className="min-h-screen flex items-center justify-center bg-radial-[at_0%_25%] from-pink-50 from-0% to-slate-50 dark:from-slate-950 dark:to-gray-900 px-4 transition-colors duration-300">
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
          Register
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 text-sm">
          Register to start the journy
        </p>

        {message && (
          <div
            role="alert"
            className="mb-4 text-center text-red-500 font-medium text-sm"
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
              className="block text-sm font-medium dark:text-white mb-1"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={dict.login.enter_your_username}
              required
              className={`w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 
                focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 ${
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
              className="block text-sm font-medium dark:text-white mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className={`w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 
                focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 ${
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
              className="block text-sm font-medium dark:text-white mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              className={`w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 
                focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 ${
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
              className="block text-sm font-medium dark:text-white mb-1"
            >
              Confirm Password
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              placeholder="Confirm your password"
              required
              className={`w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 
                focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 ${
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
            className="w-full py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-lg hover:bg-purple-800 transition"
          >
            Register
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
          {/* Link to login */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
            Already have an account?{" "}
            <Link
              href="/en/login"
              className="underline font-medium text-[#06b6d4] dark:text-[#057f95] hover:text-[#268a9c] dark:hover:text-[#0cacc8]"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
    // <div className="fixed inset-0 overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-black p-4">
    //   <div
    //     className={`w-full max-w-md bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/30
    //       transform transition-all duration-700 ease-out
    //       ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
    //     `}
    //   >
    //     {/* Picture / Logo */}
    //     <div className="flex justify-center mb-6">
    //       <Image
    //         src="/logo.png"
    //         alt="Logo"
    //         width={80}
    //         height={80}
    //         className="rounded-full shadow"
    //       />
    //     </div>

    //     {/* Title */}
    //     <h1 className="text-2xl font-bold text-center text-white mb-2">
    //       Create Account
    //     </h1>
    //     <p className="text-center text-gray-200 mb-6 text-sm">
    //       Sign up to get started
    //     </p>

    //     {message && (
    //       <div
    //         role="alert"
    //         className="mb-4 text-center text-red-300 font-medium"
    //       >
    //         {message}
    //       </div>
    //     )}

    //     {/* Register Form */}
    //     <form
    //       onSubmit={(e) => {
    //         e.preventDefault();
    //         const formData = new FormData(e.currentTarget);
    //         onSubmit(formData);
    //       }}
    //       noValidate
    //       className="space-y-5"
    //     >
    //       {/* Name Field */}
    //       <div>
    //         <label
    //           htmlFor="name"
    //           className="block text-sm font-medium text-white mb-1"
    //         >
    //           Full Name
    //         </label>
    //         <input
    //           id="name"
    //           name="name"
    //           type="text"
    //           placeholder="Enter your full name"
    //           required
    //           className={`w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 border focus:outline-none focus:ring-2 text-white placeholder-gray-200 ${
    //             errors?.name
    //               ? "border-red-500"
    //               : "border-gray-300 focus:ring-purple-400"
    //           }`}
    //         />
    //         {errors?.name && (
    //           <p className="mt-1 text-sm text-red-300">{errors.name}</p>
    //         )}
    //       </div>

    //       {/* Email Field */}
    //       <div>
    //         <label
    //           htmlFor="email"
    //           className="block text-sm font-medium text-white mb-1"
    //         >
    //           Email
    //         </label>
    //         <input
    //           id="email"
    //           name="email"
    //           type="email"
    //           placeholder="Enter your email"
    //           required
    //           className={`w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 border focus:outline-none focus:ring-2 text-white placeholder-gray-200 ${
    //             errors?.email
    //               ? "border-red-500"
    //               : "border-gray-300 focus:ring-purple-400"
    //           }`}
    //         />
    //         {errors?.email && (
    //           <p className="mt-1 text-sm text-red-300">{errors.email}</p>
    //         )}
    //       </div>

    //       {/* Password Field */}
    //       <div>
    //         <label
    //           htmlFor="password"
    //           className="block text-sm font-medium text-white mb-1"
    //         >
    //           Password
    //         </label>
    //         <input
    //           id="password"
    //           name="password"
    //           type="password"
    //           placeholder="Enter your password"
    //           required
    //           className={`w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 border focus:outline-none focus:ring-2 text-white placeholder-gray-200 ${
    //             errors?.password
    //               ? "border-red-500"
    //               : "border-gray-300 focus:ring-purple-400"
    //           }`}
    //         />
    //         {errors?.password && (
    //           <p className="mt-1 text-sm text-red-300">{errors.password}</p>
    //         )}
    //       </div>

    //       {/* Confirm Password Field */}
    //       <div>
    //         <label
    //           htmlFor="password_confirmation"
    //           className="block text-sm font-medium text-white mb-1"
    //         >
    //           Confirm Password
    //         </label>
    //         <input
    //           id="password_confirmation"
    //           name="password_confirmation"
    //           type="password"
    //           placeholder="Confirm your password"
    //           required
    //           className={`w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 border focus:outline-none focus:ring-2 text-white placeholder-gray-200 ${
    //             errors?.password_confirmation
    //               ? "border-red-500"
    //               : "border-gray-300 focus:ring-purple-400"
    //           }`}
    //         />
    //         {errors?.password_confirmation && (
    //           <p className="mt-1 text-sm text-red-300">
    //             {errors.password_confirmation}
    //           </p>
    //         )}
    //       </div>

    //       <button
    //         type="submit"
    //         className="w-full py-2 bg-purple-700/80 text-white rounded-lg hover:bg-purple-800 transition"
    //       >
    //         Sign Up
    //       </button>

    //       {/* Social Register Buttons */}
    //       <div className="flex justify-center gap-4 mt-4">
    //         <button
    //           type="button"
    //           className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white transition font-bold text-lg"
    //         >
    //           G
    //         </button>
    //         <button
    //           type="button"
    //           className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition font-bold text-lg"
    //         >
    //           F
    //         </button>
    //         <button
    //           type="button"
    //           className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 hover:bg-blue-500 text-white transition font-bold text-lg"
    //         >
    //           T
    //         </button>
    //       </div>

    //       {/* Link to Login */}
    //       <p className="text-center text-sm text-gray-200 mt-4">
    //         Already have an account?{" "}
    //         <Link
    //           href={`/${lang}/login`}
    //           className="underline hover:text-white"
    //           scroll={false}
    //         >
    //           Login
    //         </Link>
    //       </p>
    //     </form>
    //   </div>
    // </div>
  );
}
