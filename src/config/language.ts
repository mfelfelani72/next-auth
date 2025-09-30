export const languages = {
  en: { dir: "ltr", name: "English" },
  fa: { dir: "rtl", name: "فارسی" },
} as const;

export type Lang = keyof typeof languages;
