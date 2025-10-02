/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-02 06:53:53
 * @Description:
 */
// Components
import Login from "@/components/Login";
// Functions
import { getDictionary } from "@/dictionaries";
export default async function LoginPage({ params }) {
    // Constants
    const resolvedParams = await params;
    const { lang = "en" } = resolvedParams !== null && resolvedParams !== void 0 ? resolvedParams : {};
    // Functions
    const dict = await getDictionary(lang);
    return (<>
      <Login dict={await dict} lang={lang} loginRoute={"/api/auth/login"}/>
    </>);
}
