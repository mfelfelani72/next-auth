/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-04 07:17:02
 * @Description:
 */
export declare const languages: {
    readonly en: {
        readonly dir: "ltr";
        readonly locale: "en_US";
        readonly schemaLocale: "en-US";
        readonly name: "English";
        readonly flag: "🇺🇸";
        readonly nativeName: "English";
    };
    readonly fa: {
        readonly dir: "rtl";
        readonly locale: "fa_IR";
        readonly schemaLocale: "fa-IR";
        readonly name: "Persian";
        readonly flag: "🇮🇷";
        readonly nativeName: "فارسی";
    };
};
export type Lang = keyof typeof languages;
export declare function getLocale(lang: Lang): string;
export declare function getSchemaLocale(lang: Lang): string;
export declare function getDirection(lang: Lang): "ltr" | "rtl";
export declare function getName(lang: Lang): string;
export declare function getNativeName(lang: Lang): string;
export declare function getFlag(lang: Lang): string;
