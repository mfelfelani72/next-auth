import en from "./en.json";
import fa from "./fa.json";

const dictionaries = {
  en,
  fa,
};

export async function getDictionary(lang: "en" | "fa") {
  return dictionaries[lang] ?? dictionaries["en"];
}
