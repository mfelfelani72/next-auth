/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-18 09:36:46
 * @Description: Translation utilities
 */
import React from "react";
import { type Lang } from "../configs/language";
export declare function createTranslator(lang: Lang): {
    t: (key: string, fallback?: string) => string;
    lang: "en" | "fa";
};
export declare function simpleTrans(i18nKey: string, values: Record<string, string> | undefined, t: (key: string) => string): string;
export declare function trans(i18nKey: string, values: Record<string, string>, t: (key: string) => string, ...elements: React.ReactElement[]): React.ReactNode;
