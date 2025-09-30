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
    <div className="mf-fixed mf-inset-0 mf-overflow-hidden mf-flex mf-items-center mf-justify-center mf-bg-gradient-to-br mf-from-purple-900 mf-via-purple-800 mf-to-black mf-p-4">
      <div className="mf-w-full mf-max-w-md mf-bg-white/20 mf-backdrop-blur-md mf-rounded-2xl mf-shadow-xl mf-p-8 mf-border mf-border-white/30">
        {/* Picture / Logo */}
        <div className="mf-flex mf-justify-center mf-mb-6">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="mf-rounded-full mf-shadow"
          />
        </div>

        {/* Title */}
        <h1 className="mf-text-2xl mf-font-bold mf-text-center mf-text-white mf-mb-2">
          Welcome Back
        </h1>
        <p className="mf-text-center mf-text-gray-200 mf-mb-6 mf-text-sm">
          Login with your credentials to continue
        </p>

        {message && (
          <div
            role="alert"
            className="mf-mb-4 mf-text-center mf-text-red-300 mf-font-medium"
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
          className="mf-space-y-5"
        >
          <div>
            <label
              htmlFor="username"
              className="mf-block mf-text-sm mf-font-medium mf-text-white mf-mb-1"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              required
              className={`mf-w-full mf-px-4 mf-py-2 mf-rounded-lg mf-bg-white/20 mf-focus:bg-white/30 mf-border mf-focus:outline-none mf-focus:ring-2 mf-text-white mf-placeholder-gray-200 ${
                errors?.username ? "mf-border-red-500" : "mf-border-gray-300 mf-focus:ring-purple-400"
              }`}
            />
            {errors?.username && (
              <p className="mf-mt-1 mf-text-sm mf-text-red-300">{errors.username}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="mf-block mf-text-sm mf-font-medium mf-text-white mf-mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              className={`mf-w-full mf-px-4 mf-py-2 mf-rounded-lg mf-bg-white/20 mf-focus:bg-white/30 mf-border mf-focus:outline-none mf-focus:ring-2 mf-text-white mf-placeholder-gray-200 ${
                errors?.password ? "mf-border-red-500" : "mf-border-gray-300 mf-focus:ring-purple-400"
              }`}
            />
            {errors?.password && (
              <p className="mf-mt-1 mf-text-sm mf-text-red-300">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="mf-w-full mf-py-2 mf-bg-purple-700/80 mf-text-white mf-rounded-lg mf-hover:bg-purple-800 mf-transition"
          >
            Log In
          </button>

          {/* Social Login Buttons */}
          <div className="mf-flex mf-justify-center mf-gap-4 mf-mt-4">
            <button
              type="button"
              className="mf-flex mf-items-center mf-justify-center mf-w-10 mf-h-10 mf-rounded-full mf-bg-red-500 mf-hover:bg-red-600 mf-text-white mf-transition mf-font-bold mf-text-lg"
            >
              G
            </button>
            <button
              type="button"
              className="mf-flex mf-items-center mf-justify-center mf-w-10 mf-h-10 mf-rounded-full mf-bg-blue-600 mf-hover:bg-blue-700 mf-text-white mf-transition mf-font-bold mf-text-lg"
            >
              F
            </button>
            <button
              type="button"
              className="mf-flex mf-items-center mf-justify-center mf-w-10 mf-h-10 mf-rounded-full mf-bg-blue-400 mf-hover:bg-blue-500 mf-text-white mf-transition mf-font-bold mf-text-lg"
            >
              T
            </button>
          </div>

          <p className="mf-text-center mf-text-sm mf-text-gray-200 mf-mt-4">
            Don’t have an account?{" "}
            <a href="#" className="mf-underline mf-hover:text-white">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
