// example: src/app/[lang]/(auth)/register/page.tsx
import { getDictionary } from "@/dictionaries";
import RegisterPageClient from "../../../components/UiRegister";
import LangSwitcher from "@/app/components/LangSwitcher";

interface Props {
  params: { lang?: string } | Promise<{ lang?: string }>;
}

export default async function RegisterPage({ params }: Props) {
  // ✅ اگر params یک Promise باشه، await می‌کنیم؛ اگر نباشه هم کار می‌کنه

  const resolvedParams = await params;
  const { lang = "en" } = resolvedParams ?? {};

  const dict = await getDictionary(lang);

  return (
    <>
      <LangSwitcher currentLang={lang} />
      <RegisterPageClient dict={await dict} lang={lang} />;
    </>
  );
}
