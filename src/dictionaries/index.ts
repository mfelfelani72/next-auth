import en from "./en.json";
import fa from "./fa.json";

const dictionaries = { en, fa } as const;

export type Dict = typeof en;
export type Lang = keyof typeof dictionaries;

export function getDictionary(lang: string): Dict {
  const selected = (lang in dictionaries ? (lang as Lang) : "en") as Lang;
  return dictionaries[selected];
}
