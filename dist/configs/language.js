/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-04 07:17:02
 * @Description:
 */
export const languages = {
    en: {
        dir: "ltr",
        locale: "en_US",
        schemaLocale: "en-US",
        name: "English",
        flag: "🇺🇸",
        nativeName: "English",
    },
    fa: {
        dir: "rtl",
        locale: "fa_IR",
        schemaLocale: "fa-IR",
        name: "Persian",
        flag: "🇮🇷",
        nativeName: "فارسی",
    },
};
export function getLocale(lang) {
    return languages[lang].locale;
}
export function getSchemaLocale(lang) {
    return languages[lang].schemaLocale;
}
export function getDirection(lang) {
    return languages[lang].dir;
}
export function getName(lang) {
    return languages[lang].name;
}
export function getNativeName(lang) {
    return languages[lang].nativeName;
}
export function getFlag(lang) {
    return languages[lang].flag;
}
