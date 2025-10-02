/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2024-10-02 09:43:37
 * @Description: Register endpoint
 */

import { registerHandler } from "@/libs/registerHandler";

export const POST = registerHandler(`${process.env.API_URL}/register`);
