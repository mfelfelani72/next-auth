/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-08 10:10:51
 * @Description:
 */
"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
// Components
import NextImage from "next/image";
import { imageLoader } from "forma-li";
// Functions
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { cn } from "forma-li";
// Hooks
import { useTranslation } from "../../hooks/useTranslation";
// Constants
const PHRASE_KEYS = [
    "loading_ahead_of_market",
    "loading_where_news_gather",
    "loading_stay_informed",
    "loading_realtime_intelligence",
    "loading_never_miss",
    "loading_your_edge",
    "loading_all_news_one_hub",
];
const PHRASE_INTERVAL = 3000;
const FALLBACK_SRC = "/images/svg/baseLogo.svg";
const SmallSpinner = ({ size }) => {
    const s = Math.max(12, Math.min(size * 0.4, 28));
    return (_jsxs("span", { className: "relative flex items-center justify-center", style: { width: s, height: s }, children: [_jsx(motion.span, { className: "absolute inset-0 rounded-full border-2 border-primary-400/20 dark:border-secondary-400/20" }), _jsx(motion.span, { className: "absolute inset-0 rounded-full border-2 border-transparent border-t-primary-400/60 dark:border-t-secondary-400/60", animate: { rotate: 360 }, transition: { duration: 1, repeat: Infinity, ease: "linear" } }), _jsx(motion.span, { className: "rounded-full bg-primary-400/30 dark:bg-secondary-400/30", style: { width: s * 0.2, height: s * 0.2 }, animate: { scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }, transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" } })] }));
};
const ImageWithLoading = (_a) => {
    var { className, onLoad, onError, src, fallbackElement } = _a, props = __rest(_a, ["className", "onLoad", "onError", "src", "fallbackElement"]);
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(() => Math.floor(Math.random() * PHRASE_KEYS.length));
    const [containerWidth, setContainerWidth] = useState(0);
    const ref = useRef(null);
    const isFill = props.fill;
    const computedSizes = isFill && !props.sizes
        ? "(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        : props.sizes;
    // Track container width for responsive text / spinner
    useEffect(() => {
        if (!isLoading || !ref.current)
            return;
        const observer = new ResizeObserver(([entry]) => {
            setContainerWidth(entry.contentRect.width);
        });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [isLoading]);
    // Rotate phrases while loading
    useEffect(() => {
        if (!isLoading)
            return;
        const interval = setInterval(() => {
            setPhraseIndex((prev) => (prev + 1) % PHRASE_KEYS.length);
        }, PHRASE_INTERVAL);
        return () => clearInterval(interval);
    }, [isLoading]);
    const showText = containerWidth > 80;
    const fontSize = Math.max(14, Math.min(containerWidth * 0.08, 36));
    const padding = Math.max(8, containerWidth * 0.06);
    // Determine the actual src to use
    const actualSrc = hasError ? FALLBACK_SRC : src;
    return (_jsxs("span", { ref: ref, className: cn("relative overflow-hidden", isFill ? "absolute inset-0" : "inline-block"), children: [_jsx(AnimatePresence, { children: isLoading && (_jsxs(motion.span, { className: "absolute inset-0 z-10 flex items-center justify-center overflow-hidden rounded-[inherit] bg-gray-100 dark:bg-gray-800", initial: { opacity: 1 }, exit: { opacity: 0, scale: 1.04 }, transition: { duration: 0.4, ease: "easeOut" }, children: [_jsx(motion.span, { className: "absolute inset-0 bg-linear-to-r from-transparent via-primary-400/6 to-transparent dark:via-secondary-400/6", style: { backgroundSize: "200% 100%" }, animate: { backgroundPosition: ["200% 0", "-200% 0"] }, transition: { duration: 2, repeat: Infinity, ease: "linear" } }), showText ? (_jsxs("span", { className: "relative z-10 flex flex-col items-center justify-center text-center", style: { padding, maxWidth: "90%" }, children: [_jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.span, { className: "block font-semibold leading-snug text-primary-400 dark:text-secondary-400", style: { fontSize }, initial: { opacity: 0, y: 10, filter: "blur(6px)" }, animate: { opacity: 0.7, y: 0, filter: "blur(0px)" }, exit: { opacity: 0, y: -10, filter: "blur(6px)" }, transition: { duration: 0.5, ease: "easeInOut" }, children: t(PHRASE_KEYS[phraseIndex]) }, phraseIndex) }), _jsx(motion.span, { className: "mt-2 h-0.5 rounded-full bg-primary-400/25 dark:bg-secondary-400/25", style: { width: Math.min(containerWidth * 0.45, 120) }, animate: { scaleX: [0.6, 1, 0.6] }, transition: {
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    } })] })) : (_jsx(SmallSpinner, { size: containerWidth }))] }, "image-loader")) }), hasError && fallbackElement && (_jsx("span", { className: cn("absolute inset-0 z-20", className), children: fallbackElement })), _jsx(NextImage, Object.assign({}, props, { src: actualSrc, sizes: computedSizes, loader: imageLoader, className: cn("transition-opacity duration-500 ease-out", isLoading || (hasError && fallbackElement)
                    ? "opacity-0"
                    : "opacity-100", className), onLoad: (e) => {
                    setIsLoading(false);
                    onLoad === null || onLoad === void 0 ? void 0 : onLoad(e);
                }, onError: (e) => {
                    if (!hasError) {
                        setHasError(true);
                        if (fallbackElement)
                            setIsLoading(false);
                        onError === null || onError === void 0 ? void 0 : onError(e);
                    }
                    else {
                        setIsLoading(false);
                        onError === null || onError === void 0 ? void 0 : onError(e);
                    }
                } }))] }));
};
const Image = (_a) => {
    var { enableLoading = true } = _a, props = __rest(_a, ["enableLoading"]);
    if (!enableLoading) {
        return _jsx(NextImage, Object.assign({}, props, { loader: imageLoader }));
    }
    return _jsx(ImageWithLoading, Object.assign({}, props));
};
export default Image;
