import en from "./en.json";
import fa from "./fa.json";
const dictionaries = {
    en,
    fa,
};
export async function getDictionary(lang) {
    var _a;
    return (_a = dictionaries[lang]) !== null && _a !== void 0 ? _a : dictionaries["en"];
}
