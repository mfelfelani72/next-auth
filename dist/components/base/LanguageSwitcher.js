/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-08 10:10:51
 * @Description: Language Switcher with Glassmorphism Style
 */
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
// Components
import { LanguageIcon } from "forma-ui";
// Zustand
import { useLangStore } from "../../stores/LangStore";
// Interfaces
import { languages, getNativeName, getFlag, } from "../../configs/language";
export default function LanguageSwitcher() {
    // Hooks
    const router = useRouter();
    const pathname = usePathname();
    // States
    const { lang, setLang } = useLangStore();
    const [pendingLang, setPendingLang] = useState(null);
    // States and Refs
    const [isOpen, setIsOpen] = useState(false);
    const [menuPos, setMenuPos] = useState({
        top: 0,
        left: 0,
        width: 0,
        position: "bottom",
    });
    const btnRef = useRef(null);
    const menuRef = useRef(null);
    // Functions
    const getNewPath = (newLang) => {
        const segments = pathname.split("/").filter(Boolean);
        if (segments.length > 0 && segments[0] in languages) {
            segments[0] = newLang;
        }
        else {
            segments.unshift(newLang);
        }
        return "/" + segments.join("/");
    };
    const handleChange = (newLang) => {
        if (newLang === lang)
            return;
        const newPath = getNewPath(newLang);
        setPendingLang(newLang);
        setIsOpen(false);
        router.replace(newPath);
    };
    useEffect(() => {
        if (pendingLang && pathname) {
            const currentLangFromUrl = pathname.split("/").filter(Boolean)[0];
            if (currentLangFromUrl === pendingLang) {
                setLang(pendingLang);
                setPendingLang(null);
            }
        }
    }, [pathname, pendingLang, setLang]);
    useEffect(() => {
        if (isOpen && btnRef.current) {
            const rect = btnRef.current.getBoundingClientRect();
            const menuWidth = rect.width + 50;
            const menuHeight = Object.keys(languages).length * 48 + 16;
            let left = rect.left - 25;
            let horizontalPosition = "left";
            if (left + menuWidth > window.innerWidth) {
                left = window.innerWidth - menuWidth - 10;
                horizontalPosition = "right";
            }
            if (left < 10) {
                left = 10;
            }
            let top = rect.bottom + 8;
            let verticalPosition = "bottom";
            if (top + menuHeight > window.innerHeight - 10) {
                top = rect.top - menuHeight - 16;
                verticalPosition = "top";
            }
            if (top < 10) {
                top = 10;
            }
            setMenuPos({
                top,
                left,
                width: menuWidth,
                position: verticalPosition === "top" ? "top" : "bottom",
            });
        }
    }, [isOpen]);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (btnRef.current &&
                !btnRef.current.contains(event.target) &&
                menuRef.current &&
                !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const getMenuAnimationClass = () => {
        switch (menuPos.position) {
            case "top":
                return "origin-bottom scale-95";
            case "bottom":
            default:
                return "origin-top scale-95";
        }
    };
    return (_jsxs("div", { className: "relative inline-block", children: [_jsxs("button", { ref: btnRef, onClick: () => setIsOpen((prev) => !prev), className: "flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300 cursor-pointer\n                   bg-white/10 dark:bg-Neutral-700/40\n                   backdrop-blur-md backdrop-saturate-150\n                   border border-white/40 dark:border-Neutral-600/30\n                   shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]\n                   hover:bg-white/50 dark:hover:bg-Neutral-600/50\n                   hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]\n                   hover:border-white/60 dark:hover:border-Neutral-500/40", children: [_jsx("span", { className: "text-md", children: _jsx(LanguageIcon, { className: "text-Neutral-100" }) }), _jsx("svg", { className: `w-4 h-4 text-Neutral-100 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })] }), isOpen && (_jsx("div", { ref: menuRef, className: `fixed py-2 rounded-xl transition-all duration-200 transform ${getMenuAnimationClass()}
                     bg-white/70 dark:bg-Neutral-800/50
                     backdrop-blur-xl backdrop-saturate-150
                     border border-white/50 dark:border-Neutral-600/30
                     shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                     before:absolute before:inset-0 before:rounded-xl before:pointer-events-none
                     before:bg-linear-to-br before:from-white/20 before:to-transparent before:opacity-50`, style: {
                    top: menuPos.top,
                    left: menuPos.left,
                    width: menuPos.width,
                }, children: Object.keys(languages).map((l) => {
                    const currentLang = l;
                    const isActive = currentLang === lang;
                    return (_jsxs("button", { onClick: () => handleChange(currentLang), disabled: isActive, className: `w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200
                           ${isActive
                            ? "text-primary-600 dark:text-primary-400 cursor-default bg-white/20 dark:bg-white/10"
                            : "text-Neutral-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white/30 dark:hover:bg-Neutral-700/40 cursor-pointer"}`, children: [_jsx("span", { className: "text-lg", children: getFlag(currentLang) }), _jsx("span", { className: "font-medium", children: getNativeName(currentLang) }), isActive && (_jsx("div", { className: "w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full ml-auto shadow-[0_0_12px_rgba(99,102,241,0.4)]" }))] }, currentLang));
                }) }))] }));
}
