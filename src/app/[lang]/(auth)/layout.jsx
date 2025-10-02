import { languages } from "@/config/language";
export function generateStaticParams() {
    return Object.keys(languages).map((lang) => ({ lang }));
}
export default async function LangLayout({ children, params, }) {
    const resolvedParams = await params;
    const { lang = "en" } = resolvedParams !== null && resolvedParams !== void 0 ? resolvedParams : {};
    const dir = languages[lang].dir;
    return (<div lang={lang} dir={dir}>
      {children}
    </div>);
}
