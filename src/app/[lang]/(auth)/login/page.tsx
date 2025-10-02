// src/app/[lang]/(auth)/login/page.tsx
import { getDictionary } from "@/dictionaries";
import LoginPageClient from "../../../components/UiLogin";
import LangSwitcher from "@/app/components/LangSwitcher";

interface Props {
  params: { lang?: string } | Promise<{ lang?: string }>;
}

export default async function LoginPage({ params }: Props) {
  const resolvedParams = await params;
  const { lang = "en" } = resolvedParams ?? {};

  const dict = await getDictionary(lang);
  return (
    <>
      <LangSwitcher currentLang={lang} />
      <LoginPageClient dict={await dict} lang={lang} />;
    </>
  );
}
