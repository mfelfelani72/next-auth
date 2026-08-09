/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-12 08:09:32
 * @Description:
 */

import type { ReactNode } from "react";

// Fonts

import { satoshi, iranSans } from "@/libraries/fonts";

// CSS

import "./globals.css";

import {
  getCookieAppTheme,
  getCookieAppLang,
} from "@/utilities/app/cookieUtils";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  //  dark and light

  const theme = await getCookieAppTheme();
  const lang = await getCookieAppLang();

  return (
    <html
      className={`${iranSans.variable} ${satoshi.variable} ${
        theme === "dark" ? "dark" : ""
      }`}
      lang={lang.lang}
      data-theme={process.env.NEXT_PUBLIC_LICENSE_NAME}
    >
      <body className="overflow-auto font-iranSans">{children}</body>
    </html>
  );
}
