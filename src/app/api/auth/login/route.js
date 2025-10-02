/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-02 08:20:01
 * @Description:
 */
import { loginHandler } from "@/libs/loginHandler";
export const POST = loginHandler(`${process.env.API_URL}/login`);
