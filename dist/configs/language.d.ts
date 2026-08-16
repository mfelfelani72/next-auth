/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-04 07:17:02
 * @Description: Languages configuration for this project
 */
declare const ACTIVE_LANGS: readonly ["fa", "en"];
export type Lang = typeof ACTIVE_LANGS[number];
declare const languages: Record<"ar" | "cs" | "da" | "de" | "el" | "en" | "es" | "fa" | "fi" | "fr" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ko" | "ms" | "nl" | "no" | "pl" | "pt" | "ro" | "ru" | "sv" | "th" | "tr" | "uk" | "ur" | "vi" | "zh", import("forma-li").LanguageInfo>;
export { languages };
