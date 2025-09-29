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
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-gray-100 via-white to-gray-200 p-6">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="flex flex-col items-center p-8 border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white">
          <Image
            src="/logo.png"
            alt="Logo"
            width={90}
            height={90}
            className="mb-4 rounded-full shadow-md"
          />
          <h1 className="text-3xl font-extrabold text-gray-800">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Login with your credentials to continue
          </p>
        </div>

        {/* Body */}
        <div className="p-8">
          {message && (
            <div
              role="alert"
              className="mb-4 text-center text-red-500 font-medium"
            >
              {message}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              onSubmit(formData);
            }}
            noValidate
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-semibold text-gray-700 mb-1"
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
                <p className="mt-1 text-sm text-red-500">{errors.username}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-1"
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
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Log In
            </button>

            {/* Social Login */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                type="button"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold"
              >
                G
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold"
              >
                F
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-sky-400 hover:bg-sky-500 text-white font-bold"
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
