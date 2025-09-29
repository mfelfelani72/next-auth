"use client";
import React, { useState, FormEvent, useEffect } from "react";
import Image from "next/image";

type LoginFormErrors = {
  username?: string;
  password?: string;
};

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const validate = (): boolean => {
    const newErrors: LoginFormErrors = {};
    if (!username.trim()) {
      newErrors.username = "Username is required";
    } else if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    console.log({ username, password });
  };

  return (
    <div className="fixed inset-0 overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-black p-4">
      <div
        className={`w-full max-w-md bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/30 transform transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
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
        <h1 className="text-2xl font-bold text-center text-white mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-200 mb-6 text-sm">
          Login with your credentials to continue
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-white mb-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className={`w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 border focus:outline-none focus:ring-2 transition ${
                errors.username
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-purple-400"
              } text-white placeholder-gray-200`}
            />
            {errors.username && (
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
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 border focus:outline-none focus:ring-2 transition ${
                errors.password
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-purple-400"
              } text-white placeholder-gray-200`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-300">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-700/80 text-white rounded-lg hover:bg-purple-800 transition"
          >
            Log In
          </button>

          {/* Social Login Buttons without external libraries */}
          <div className="flex justify-center gap-4 mt-4">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white transition font-bold text-lg">
              G
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition font-bold text-lg">
              F
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 hover:bg-blue-500 text-white transition font-bold text-lg">
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
