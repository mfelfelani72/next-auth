/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com, sinasalehimilani2016@gmail.com
 * @Team:
 * @Date: 2025-10-07 07:53:42
 * @Description:
 */
import { getMeta } from "./meta/index";
import auth_en from "./auth/en.json";
const meta = await getMeta("en");
const en = Object.assign(Object.assign({}, meta), auth_en);
export default en;
