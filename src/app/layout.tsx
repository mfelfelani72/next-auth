/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-12 08:09:32
 * @Description:
 */


import type { ReactNode } from "react";
import { cookies } from "next/headers";

// Fonts

import { satoshi, iranSans } from "@/libraries/fonts";

// CSS

import "./globals.css";

import { getCookieAppTheme, getCookieAppLang } from "forma-li";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  //  dark and light

  const cookieStore = await cookies();

  const theme = await getCookieAppTheme(cookieStore);
  const lang = await getCookieAppLang(cookieStore);

  return (
    <html
      className={`${iranSans.variable} ${satoshi.variable} ${
        theme === "dark" ? "dark" : ""
      }`}
      lang={lang.lang}
      data-theme={"sky"}
    >
      <body className="overflow-auto font-iranSans">{children}</body>
    </html>
  );
}
