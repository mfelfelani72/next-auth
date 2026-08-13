"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { InputPassword, InputEmail } from "forma-ui";
import LocalizedLink from "@/components/base/LocalizedLink";
import type { LoginComponentProps } from "@/types";

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
    <g fill="none" fillRule="evenodd">
      <path fill="#4285F4" d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" />
      <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" />
      <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" />
    </g>
  </svg>
);

export default function LoginForm({ onSubmit, errors, message }: LoginComponentProps) {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full w-full animate-in fade-in slide-in-from-bottom-4 duration-500 justify-between">
      <div>
        <div className="flex flex-col">
          <InputEmail
            id="email"
            name="email"
            label={<div className="xs:text-[16px] text-amber-800 font-medium">{t("email")}</div>}
            validate={t("invalid_email")}
            placeholder={t("enter_your_email")}
            className="flex justify-between h-10 rounded-lg xl:placeholder:text-sm xs:placeholder:text-xs shadow-inner bg-amber-50/60 border-amber-200/60 text-amber-900 placeholder:text-amber-400/60 focus:border-amber-400 focus:ring-2 focus:ring-amber-200/50 transition-all"
          />
          {errors?.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}

          <InputPassword
            id="password"
            name="password"
            label={<div className="mt-6 xs:text-[16px] text-amber-800 font-medium">{t("password")}</div>}
            validate={t("invalid_password")}
            placeholder={t("enter_your_password")}
            className="flex justify-between h-10 rounded-lg xl:placeholder:text-sm xs:placeholder:text-xs shadow-inner bg-amber-50/60 border-amber-200/60 text-amber-900 placeholder:text-amber-400/60 focus:border-amber-400 focus:ring-2 focus:ring-amber-200/50 transition-all"
          />
          {errors?.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
        </div>

        <div className="flex justify-end mt-2">
          <LocalizedLink href="/auth/forgot-password" className="text-xs text-amber-700/70 hover:text-amber-900 transition-colors font-medium">
            {t("forgot_password")}
          </LocalizedLink>
        </div>

        {message && (
          <div className="mt-4 text-center text-sm text-red-500">{message}</div>
        )}
      </div>

      <div>
        <div className="flex items-center gap-4 mt-6">
          <div className="flex-1 h-px bg-amber-200/40" />
          <span className="text-xs text-amber-700/60 font-medium">{t("or_continue_with")}</span>
          <div className="flex-1 h-px bg-amber-200/40" />
        </div>

        <div className="flex gap-3 mt-2">
          <button type="button" className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-amber-200/60 bg-amber-50/60 hover:bg-amber-100/60 hover:border-amber-300 transition-all duration-300 text-amber-800 cursor-pointer shadow-sm hover:shadow-md">
            <GoogleIcon />
            <span className="text-sm font-medium">{t("google")}</span>
          </button>
        </div>

        <p className="text-center mt-2 text-sm text-amber-800/70">
          {t("dont_have_account")}{" "}
          <LocalizedLink href="/auth/register" className="text-amber-600 hover:text-amber-800 font-bold transition-colors">
            {t("create_account")}
          </LocalizedLink>
        </p>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-2 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {t("loading")}
            </span>
          ) : (
            t("login")
          )}
        </button>
      </div>
    </form>
  );
}