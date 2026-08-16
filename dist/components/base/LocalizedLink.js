/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-05 09:56:22
 * @Description: LocalizedLink با TypeScript
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
import { jsx as _jsx } from "react/jsx-runtime";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function LocalizedLink(_a) {
    var { href, prefetch = false, children, locale, className } = _a, props = __rest(_a, ["href", "prefetch", "children", "locale", "className"]);
    const pathname = usePathname();
    const currentLang = locale || pathname.split("/")[1] || "en";
    const isExternal = typeof href === "string" && /^(https?:\/\/|mailto:|tel:|#)/.test(href);
    if (isExternal) {
        return (_jsx("a", Object.assign({ href: href }, props, { className: className, children: children })));
    }
    let normalizedHref;
    if (typeof href === "string") {
        const hasLangPrefix = href.startsWith(`/${currentLang}/`) || href === `/${currentLang}`;
        normalizedHref = hasLangPrefix
            ? href
            : `/${currentLang}${href.startsWith("/") ? href : `/${href}`}`;
    }
    else {
        normalizedHref = Object.assign(Object.assign({}, href), { pathname: href.pathname
                ? href.pathname.startsWith(`/${currentLang}/`) ||
                    href.pathname === `/${currentLang}`
                    ? href.pathname
                    : `/${currentLang}${href.pathname.startsWith("/")
                        ? href.pathname
                        : `/${href.pathname}`}`
                : undefined });
    }
    return (_jsx(Link, Object.assign({ rel: "preload", scroll: false, prefetch: prefetch, href: normalizedHref }, props, { className: className, children: children })));
}
