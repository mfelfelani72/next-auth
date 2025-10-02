/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-02 06:53:53
 * @Description:
 */
// example: src/app/[lang]/(auth)/register/page.tsx
import { getDictionary } from "@/dictionaries";
import RegisterPageClient from "../../../../components/UiRegister";

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
      <RegisterPageClient dict={await dict} lang={lang} />;
    </>
  );
}
