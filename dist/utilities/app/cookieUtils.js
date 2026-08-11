/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-06 15:14:10
 * @Description:
 */
export const isBrowser = () => {
    return typeof window !== "undefined" && typeof document !== "undefined";
};
export const setCookie = (name, value, options) => {
    if (!isBrowser())
        return;
    const expires = new Date();
    if (options === null || options === void 0 ? void 0 : options.minutes) {
        expires.setTime(expires.getTime() + options.minutes * 60 * 1000);
    }
    else if (options === null || options === void 0 ? void 0 : options.days) {
        expires.setDate(expires.getDate() + options.days);
    }
    else {
        expires.setFullYear(expires.getFullYear() + 1);
    }
    document.cookie = `
    ${name}=${value};
    expires=${expires.toUTCString()};
    path=/;
    SameSite=Lax;
    ${(options === null || options === void 0 ? void 0 : options.secure) ? "Secure;" : ""}
  `.trim();
};
export const getCookie = (name) => {
    var _a;
    if (!isBrowser())
        return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return ((_a = parts.pop()) === null || _a === void 0 ? void 0 : _a.split(";").shift()) || null;
    }
    return null;
};
export const getCookieServer = async (name) => {
    var _a;
    try {
        const { cookies } = await import("next/headers");
        const cookieStore = await cookies();
        return ((_a = cookieStore.get(name)) === null || _a === void 0 ? void 0 : _a.value) || null;
    }
    catch (error) {
        console.error("Error getting cookie from server:", error);
        return null;
    }
};
export const getCookieAppLang = async () => {
    var _a, _b, _c;
    let lang = "en";
    let dir = "ltr";
    let appLangCookie = null;
    try {
        if (typeof window === "undefined") {
            // Server-side
            const { cookies } = await import("next/headers");
            const cookieStore = await cookies();
            appLangCookie = ((_a = cookieStore.get("app_lang")) === null || _a === void 0 ? void 0 : _a.value) || null;
        }
        else {
            // Client-side
            const cookies = document.cookie.split(";");
            const cookie = cookies.find((c) => c.trim().startsWith("app_lang="));
            appLangCookie = cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
        }
        if (appLangCookie) {
            const appLangData = JSON.parse(appLangCookie);
            lang = ((_b = appLangData.state) === null || _b === void 0 ? void 0 : _b.lang) || "en";
            dir = ((_c = appLangData.state) === null || _c === void 0 ? void 0 : _c.dir) || "ltr";
        }
    }
    catch (error) {
        console.error("Error in getCookieAppLang:", error);
    }
    return { lang, dir };
};
export const getCookieAppTheme = async () => {
    var _a, _b;
    let theme = "light";
    try {
        const { cookies } = await import("next/headers");
        const cookieStore = await cookies();
        const cookieThemeRaw = ((_a = cookieStore.get("app_theme")) === null || _a === void 0 ? void 0 : _a.value) || '{"state":{"theme":"light"}}';
        const parsed = JSON.parse(cookieThemeRaw);
        theme = ((_b = parsed.state) === null || _b === void 0 ? void 0 : _b.theme) === "dark" ? "dark" : "light";
    }
    catch (error) {
        console.error("Error getting theme from cookie:", error);
    }
    return theme;
};
