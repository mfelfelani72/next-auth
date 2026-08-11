/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-18 07:09:52
 * @Description: Combined App & Theme Store with JSON cookie persistence
 */
type Theme = "light" | "dark";
interface ThemeState {
    theme: Theme;
    isInitialized: boolean;
    setTheme: (newTheme: Theme) => void;
    toggleTheme: () => void;
    initializeTheme: () => void;
}
interface LoadingState {
    loading: boolean;
    setLoading: (value: boolean) => void;
}
interface DeviceState {
    device: string;
    setDevice: (value: string) => void;
}
interface AutoRefreshState {
    autoRefresh: boolean | string;
    setAutoRefresh: (value: boolean | string) => void;
}
interface HeaderState {
    headerLeftButtonFunction: (() => void) | null;
    setHeaderLeftButtonFunction: (newFunction: (() => void) | null) => void;
    headerLeftButtonChildren: React.ReactNode | string;
    setHeaderLeftButtonChildren: (children: React.ReactNode) => void;
    headerRightButtonFunction: (() => void) | null;
    setHeaderRightButtonFunction: (newFunction: (() => void) | null) => void;
    headerRightButtonChildren: React.ReactNode | string;
    setHeaderRightButtonChildren: (children: React.ReactNode) => void;
}
type AppState = ThemeState & LoadingState & DeviceState & AutoRefreshState & HeaderState;
export declare const useAppStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<AppState>, "persist" | "setState"> & {
    setState(partial: Partial<AppState> | ((state: AppState) => Partial<AppState> | AppState) | AppState, replace?: false | undefined): unknown;
    setState(state: ((state: AppState) => AppState) | AppState, replace: true): unknown;
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<AppState, unknown, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: AppState) => void) => () => void;
        onFinishHydration: (fn: (state: AppState) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<AppState, unknown, unknown>>;
    };
}>;
export declare const initializeTheme: () => void;
export {};
