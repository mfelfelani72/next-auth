/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com, sinasalehimilani2016@gmail.com
 * @Team:
 * @Date: 2025-10-07 07:53:42
 * @Description:
 */
import { getMeta } from "./meta/index";
import auth_fa from "./auth/fa.json";
const meta = await getMeta("fa");
const fa = Object.assign(Object.assign({}, meta), auth_fa);
export default fa;
