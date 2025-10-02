/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-02 06:53:53
 * @Description:
 */
// Components
import FAB from "@/components/FAB";
// Constants
import { languages } from "@/config/language";
export function generateStaticParams() {
    return Object.keys(languages).map((lang) => ({ lang }));
}
export default async function LangLayout({ children, params, }) {
    // Constants
    const resolvedParams = await params;
    const { lang = "en" } = resolvedParams !== null && resolvedParams !== void 0 ? resolvedParams : {};
    const selected = lang in languages ? lang : "en";
    const dir = languages[selected].dir;
    return (<div lang={selected} dir={dir} className="min-h-screen">
      <FAB currentLang={lang}/>
      {children}
    </div>);
}
