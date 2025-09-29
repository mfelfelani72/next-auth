import { redirect } from "next/navigation";
import { headers } from "next/headers";

// Constants

const locales = ["en", "fa"] as const;
const defaultLocale = "en";

export default async function RootPage() {
  // const
  const headerList = await headers();
  const acceptLang = headerList.get("accept-language") || "";
  const langs = acceptLang.split(",").map((l) => l.split(";")[0].trim());

  let locale = defaultLocale;

  for (const lang of langs) {
    const base = lang.split("-")[0];
    if (locales.includes(base as (typeof locales)[number])) {
      locale = base;
      break;
    }
  }

  redirect(`/${locale}/${process.env.BASE_ROUTE}`);
}
