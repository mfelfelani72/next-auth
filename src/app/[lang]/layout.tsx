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
}: LangLayoutProps) {
  const resolvedParams = await params;
  const { lang = "en" } = resolvedParams ?? {};
  const selected = lang in languages ? lang : "en";
  const dir = languages[selected as keyof typeof languages].dir;
  return (
    <div lang={selected} dir={dir} className="min-h-screen">
      {children}
    </div>
  );
}
