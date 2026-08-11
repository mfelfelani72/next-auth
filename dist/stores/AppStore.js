/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-18 07:09:52
 * @Description: Combined App & Theme Store with JSON cookie persistence
 */
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { isBrowser, setCookie, getCookie } from "../utilities/app/cookieUtils";
// Storage helper
const themeStorage = {
    getItem: (name) => {
        if (!isBrowser())
            return null;
        try {
            return localStorage.getItem(name);
        }
        catch (error) {
            console.error("Error reading from storage:", error);
            return null;
        }
    },
    setItem: (name, value) => {
        if (!isBrowser())
            return;
        try {
            localStorage.setItem(name, value);
        }
        catch (error) {
            console.error("Error writing to storage:", error);
        }
    },
    removeItem: (name) => {
        if (!isBrowser())
            return;
        try {
            localStorage.removeItem(name);
        }
        catch (error) {
            console.error("Error removing from storage:", error);
        }
    },
};
// Store
export const useAppStore = create()(persist((set, get) => ({
    // Theme
    theme: "light",
    isInitialized: false,
    setTheme: (newTheme) => {
        set({ theme: newTheme });
        if (isBrowser()) {
            const themeCookieValue = JSON.stringify({
                state: { theme: newTheme },
            });
            setCookie("app_theme", themeCookieValue);
        }
    },
    toggleTheme: () => {
        const { theme } = get();
        const newTheme = theme === "light" ? "dark" : "light";
        set({ theme: newTheme });
        if (isBrowser()) {
            const themeCookieValue = JSON.stringify({
                state: { theme: newTheme },
            });
            setCookie("app_theme", themeCookieValue);
        }
    },
    initializeTheme: () => {
        var _a, _b;
        const { isInitialized } = get();
        if (isInitialized)
            return;
        if (isBrowser()) {
            const savedThemeCookie = getCookie("app_theme");
            if (savedThemeCookie) {
                try {
                    const parsed = JSON.parse(savedThemeCookie);
                    if (((_a = parsed.state) === null || _a === void 0 ? void 0 : _a.theme) === "light" ||
                        ((_b = parsed.state) === null || _b === void 0 ? void 0 : _b.theme) === "dark") {
                        set({ theme: parsed.state.theme });
                    }
                }
                catch (error) {
                    console.error("Error parsing theme cookie:", error);
                }
            }
        }
        set({ isInitialized: true });
    },
    // Loading
    loading: false,
    setLoading: (value) => set({ loading: value }),
    // Device
    device: "",
    setDevice: (value) => set({ device: value }),
    // Auto Refresh
    autoRefresh: (() => {
        if (!isBrowser())
            return false;
        const storedValue = localStorage.getItem("autoRefresh");
        if (storedValue === null)
            return false;
        if (storedValue === "true")
            return true;
        if (storedValue === "false")
            return false;
        return storedValue;
    })(),
    setAutoRefresh: (value) => set({ autoRefresh: value }),
    // Header
    headerLeftButtonFunction: null,
    setHeaderLeftButtonFunction: (newFunction) => set({ headerLeftButtonFunction: newFunction }),
    headerLeftButtonChildren: "<div>left</div>",
    setHeaderLeftButtonChildren: (children) => set({ headerLeftButtonChildren: children }),
    headerRightButtonFunction: null,
    setHeaderRightButtonFunction: (newFunction) => set({ headerRightButtonFunction: newFunction }),
    headerRightButtonChildren: "<div>right</div>",
    setHeaderRightButtonChildren: (children) => set({ headerRightButtonChildren: children }),
}), {
    name: "app-store",
    storage: createJSONStorage(() => themeStorage),
    partialize: (state) => ({
        theme: state.theme,
        isInitialized: state.isInitialized,
        loading: state.loading,
        device: state.device,
        autoRefresh: state.autoRefresh,
        headerLeftButtonFunction: state.headerLeftButtonFunction,
        headerLeftButtonChildren: state.headerLeftButtonChildren,
        headerRightButtonFunction: state.headerRightButtonFunction,
        headerRightButtonChildren: state.headerRightButtonChildren,
    }),
}));
// Helper to initialize theme outside of React components
export const initializeTheme = () => {
    if (isBrowser()) {
        useAppStore.getState().initializeTheme();
    }
};
