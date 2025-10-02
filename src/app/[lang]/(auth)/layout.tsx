import type { ReactNode } from "react";
import { languages } from "@/config/language";

interface LangLayoutProps {
  children: ReactNode;
  params: { lang: string };
}

export function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const resolvedParams = await params;
  const { lang = "en" } = resolvedParams ?? {};

  const dir = languages[lang as keyof typeof languages].dir;
  return (
    <div lang={lang} dir={dir}>
      {children}
    </div>
  );
}
