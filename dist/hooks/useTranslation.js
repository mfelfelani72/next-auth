/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-04 14:27:32
 * @Description:
 */
"use client";
// Functions
import { getDictionary } from "../locale";
// Zustand
import { useLangStore } from "forma-li";
export function useTranslation() {
    const { lang } = useLangStore();
    const translations = getDictionary(lang);
    function t(key, fallback) {
        if (!translations) {
            console.warn("Translations not loaded for language:", lang);
            return fallback !== null && fallback !== void 0 ? fallback : key;
        }
        const keys = key.split(".");
        let value = translations;
        for (const k of keys) {
            if (value && typeof value === "object" && k in value) {
                value = value[k];
            }
            else {
                return fallback !== null && fallback !== void 0 ? fallback : key;
            }
        }
        return typeof value === "string" ? value : fallback !== null && fallback !== void 0 ? fallback : key;
    }
    return { t, lang };
}
