"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ClientLoginProps {
  onSubmit: (formData: FormData) => void;
  errors?: { username?: string; password?: string };
  message?: string | null;
}
const UiForgotpassword = ({ onSubmit, errors, message }: ClientLoginProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-black">
      <div className={`bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/30 w-full max-w-md`}>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
            Logo
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold text-white mb-2">
          Forgot Password?
        </h2>
        <p className="text-center text-white/70 mb-6">
          Enter your email address and we’ll send you a link to reset your
          password.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            onSubmit(formData);
          }}
          noValidate
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-1"
            >
              email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className={`w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 border focus:outline-none focus:ring-2 text-white placeholder-gray-200
                ${
                  errors?.password
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-purple-400"
                }
              `}
            />
            {errors?.password && (
              <p className="mt-1 text-sm text-red-300">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-purple-700/80 text-white rounded-lg hover:bg-purple-800 transition py-2 w-full"
          >
            Send Reset Link
          </button>
        </form>
        <p className="text-center text-sm text-gray-200 mt-4">
          <Link href="/en/login" className="underline hover:text-white">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UiForgotpassword;
