/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-12-31 07:59:15
 * @Description: Register Form with social login & login link
 */

"use client";

import { useState } from "react";

// Hooks

import { useTranslation } from "../../../../../../../../../hooks/useTranslation";

// Components

import { InputPassword, InputEmail, InputRePassword } from "forma-ui";
import LocalizedLink from "../../../../../../../../../components/base/LocalizedLink";

// Types

import type { RegisterComponentProps } from "../../../../../../../../../types";

// Google SVG Icon Component

// Interface

const RegisterForm = ({
  onSubmit,
  errors,
  message,
}: RegisterComponentProps) => {
  // Hooks
  const { t } = useTranslation();

  // States
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);

    onSubmit(formData); // ✅ اینجا onSubmit رو صدا بزن
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full w-full animate-in fade-in slide-in-from-bottom-4 duration-500 justify-between"
    >
      <div>
        <div className="flex flex-col gap-5">
          <div>
            <label className="xs:text-[16px] text-Neutral-100 mb-1">
              {t("email")}
            </label>
            <InputEmail
              id="email"
              name="email"
              validate={t("invalid_email")}
              placeholder={t("enter_your_email")}
              className={
                "flex justify-between h-10 rounded-lg xl:placeholder:text-sm xs:placeholder:text-xs shadow-inner bg-white/20 border-Neutral-200 text-white placeholder:text-Neutral-100"
              }
            />
          </div>
          <div>
            <label className="xs:text-[16px] text-Neutral-100 mb-1">
              {t("password")}
            </label>
            <InputPassword
              id="password"
              name="password"
              validate={t("invalid_password")}
              placeholder={t("enter_your_password")}
              className={
                "flex justify-between h-10 rounded-lg xl:placeholder:text-sm xs:placeholder:text-xs shadow-inner bg-white/20 border-Neutral-200 text-white placeholder:text-Neutral-100"
              }
            />
          </div>
          <div>
            <label className="xs:text-[16px] text-Neutral-100 mb-1">
              {t("confirm_password")}
            </label>
          </div>
          <InputRePassword
            id="confirmPassword"
            name="confirmPassword"
            validate={t("mismatch_password")}
            placeholder={t("confirm_your_password")}
            className={
              "flex justify-between px-10 h-10 w-full rounded-lg xl:placeholder:text-sm xs:placeholder:text-xs shadow-inner bg-white/20 border-Neutral-200 text-white placeholder:text-Neutral-100"
            }
          />
        </div>
      </div>

      <div>
        {/* Login Link */}
        <p className="text-center mt-2 text-sm text-Neutral-100">
          {t("already_have_account?")}{" "}
          <LocalizedLink
            href="/auth/login"
            className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
          >
            {t("login")}
          </LocalizedLink>
        </p>

        {/* Register Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-2 py-3 rounded-lg bg-linear-to-r from-primary-400 to-primary-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary-400/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              {t("loading")}
            </span>
          ) : (
            t("register")
          )}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
