import en from "./en.json";
import fa from "./fa.json";
const dictionaries = { en, fa };
export function getDictionary(lang) {
    const selected = (lang in dictionaries ? lang : "en");
    return dictionaries[selected];
}
