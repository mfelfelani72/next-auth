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
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white p-10">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="mb-6 rounded-xl shadow-lg bg-white p-2"
          />
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="mt-3 text-sm text-indigo-100 text-center">
            Sign in to continue to your account and explore all features.
          </p>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-1/2 p-10">
          {message && (
            <div
              role="alert"
              className="mb-4 text-center text-red-500 font-medium"
            >
              {message}
            </div>
          )}

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Login to Your Account
          </h2>

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
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                required
                className={`w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800 placeholder-gray-400 ${
                  errors?.username ? "border-red-500" : ""
                }`}
              />
              {errors?.username && (
                <p className="mt-1 text-xs text-red-500">{errors.username}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                className={`w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800 placeholder-gray-400 ${
                  errors?.password ? "border-red-500" : ""
                }`}
              />
              {errors?.password && (
                <p className="mt-1 text-xs text-red-500">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Log In
            </button>

            {/* Social Login */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                type="button"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white"
              >
                G
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                F
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-400 hover:bg-sky-500 text-white"
              >
                T
              </button>
            </div>

            <p className="text-center text-sm text-gray-600 mt-5">
              Don’t have an account?{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
