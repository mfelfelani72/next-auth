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
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Login */}
      <div className="w-full max-w-md bg-white shadow-xl p-10 flex flex-col justify-center">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="mb-3 rounded-full shadow-md"
          />
          <h1 className="text-2xl font-bold text-gray-800">Login</h1>
          <p className="text-gray-500 text-sm">Access your account</p>
        </div>

        {message && (
          <div
            role="alert"
            className="mb-4 text-center text-red-500 text-sm font-medium"
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
              className={`w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-indigo-400 ${
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
              className={`w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-indigo-400 ${
                errors?.password ? "border-red-500" : ""
              }`}
            />
            {errors?.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
          >
            Log In
          </button>

          <div className="flex justify-center gap-3 mt-6">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white">
              G
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white">
              F
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-400 text-white">
              T
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-5">
            Don’t have an account?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>

      {/* Right Side Content */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-10">
        <div className="max-w-lg text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Welcome to Our Platform
          </h2>
          <p className="text-lg text-indigo-100">
            Manage your projects, collaborate with your team, and explore new
            possibilities. Sign in to continue.
          </p>
        </div>
      </div>
    </div>
  );
}
