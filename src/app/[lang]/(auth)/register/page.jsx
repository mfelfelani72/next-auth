/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-02 06:53:53
 * @Description:
 */
// Components
import Register from "@/components/Register";
// Functions
import { getDictionary } from "@/dictionaries";
export default async function RegisterPage({ params }) {
    // Constants
    const resolvedParams = await params;
    const { lang = "en" } = resolvedParams !== null && resolvedParams !== void 0 ? resolvedParams : {};
    const dict = await getDictionary(lang);
    return (<>
      <Register dict={await dict} lang={lang} registerRoute={"/api/auth/register"}/>
    </>);
}
