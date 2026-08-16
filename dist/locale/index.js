// locale/index.ts
import { cache } from "react";
import en from "./en";
import fa from "./fa";
const dictionaries = { en, fa };
export const getDictionary = cache((lang = "en") => {
    return dictionaries[lang];
});
