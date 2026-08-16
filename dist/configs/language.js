/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-04 07:17:02
 * @Description: Languages configuration for this project
 */
import { setupLanguages } from "forma-li";
const ACTIVE_LANGS = ["fa", "en"];
const { languages } = setupLanguages(ACTIVE_LANGS);
export { languages };
