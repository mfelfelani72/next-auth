export const languages = {
  en: { dir: "ltr" },
  fa: { dir: "rtl" },
} as const;

export type Lang = keyof typeof languages;
