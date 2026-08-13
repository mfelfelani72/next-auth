// common/index.tsx
"use client";

import { createContext, useContext } from "react";

const ThemeContext = createContext<string>("default");

export function ThemeProvider({ theme, children }: { theme: string; children: React.ReactNode }) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function getThemeComponents(theme: string) {
  return {
    BrandCard: require(`./theme/${theme}/BrandCard`).default,
    LeftSidebar: require(`./theme/${theme}/LeftSidebar`).default,
    RightSidebar: require(`./theme/${theme}/RightSidebar`).default,
    LoginDetails: require(`./theme/${theme}/LoginDetails`).default,
    LoginForm: require(`./theme/${theme}/LoginForm`).default,
  };
}