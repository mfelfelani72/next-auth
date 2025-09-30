"use client";

import Image from "next/image";

interface ClientLoginProps {
  onSubmit: (formData: FormData) => void;
  errors?: { username?: string; password?: string };
  message?: string | null;
}

export default function UiLogin({
  onSubmit,
  errors,
  message,
}: ClientLoginProps) {
  return (
    <div className="fixed inset-0 overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-black p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/30">
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
          Welcome Back
        </h1>
        <p className="text-center text-gray-200 mb-6 text-sm">
          Login with your credentials to continue
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
              className="block text-sm font-medium text-white mb-1"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              required
              className={`w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 border focus:outline-none focus:ring-2 text-white placeholder-gray-200 ${
                errors?.username
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-purple-400"
              }`}
            />
            {errors?.username && (
              <p className="mt-1 text-sm text-red-300">{errors.username}</p>
            )}
          </div>

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

          <button
            type="submit"
            className="w-full py-2 bg-purple-700/80 text-white rounded-lg hover:bg-purple-800 transition"
          >
            Log In
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

          <p className="text-center text-sm text-gray-200 mt-4">
            Don’t have an account?{" "}
            <a href="#" className="underline hover:text-white">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
