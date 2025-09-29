import { ReactNode } from "react";
import { Geist } from "next/font/google";

// Constants and Interface

import { languages, Lang } from "../../config/language";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

interface LangLayoutProps {
  children: ReactNode;
  params: { lang: string } | Promise<{ lang: string }>;
}

// Functions

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  // const

  const { lang: paramLang } = await params;
  const lang = (paramLang in languages ? paramLang : "en") as Lang;
  const dir = languages[lang].dir;

  return (
    <html lang={lang} dir={dir} className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
