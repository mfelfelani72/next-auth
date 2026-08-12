/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-06 15:14:10
 * @Description:
 */
export declare const isBrowser: () => boolean;
export declare const setCookie: (name: string, value: string, options?: {
    minutes?: number;
    days?: number;
    secure?: boolean;
}) => void;
export declare const getCookie: (name: string) => string | null;
export declare const getCookieServer: (name: string) => Promise<string | null>;
export declare const getCookieAppLang: () => Promise<{
    lang: string;
    dir: string;
}>;
export declare const getCookieAppTheme: () => Promise<"light" | "dark">;
