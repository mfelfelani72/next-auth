/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-05 12:41:14
 * @Description: Lang store with API routes
 */
import { LangState } from "../interfaces/dictionary";
export declare const useLangStore: import("zustand").UseBoundStore<import("zustand").StoreApi<LangState>>;
export declare const initializeLang: (langFromUrl?: string) => Promise<void>;
