/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-12 09:03:23
 * @Description:
 */
import { Lang } from "../configs/language";
export type Dictionary = Record<string, string>;
export interface LangState {
    lang: Lang;
    dir: "ltr" | "rtl";
    refreshKey: number;
    isInitialized: boolean;
    setLang: (newLang: Lang) => void;
    initializeLang: (langFromUrl?: string) => void;
    triggerRefresh?: () => void;
}
