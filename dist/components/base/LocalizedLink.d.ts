import { LinkProps } from "next/link";
import { ReactNode } from "react";
import { UrlObject } from "url";
interface LocalizedLinkProps extends Omit<LinkProps, "href"> {
    href: string | UrlObject;
    prefetch?: boolean;
    children: ReactNode;
    locale?: string;
    target?: string;
    className?: string;
    style?: any;
}
export default function LocalizedLink({ href, prefetch, children, locale, className, ...props }: LocalizedLinkProps): import("react").JSX.Element;
export {};
