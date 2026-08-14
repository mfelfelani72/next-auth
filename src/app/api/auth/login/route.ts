/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-12-31 06:00:17
 * @Description: Login API Route
 */

// Functions

import { loginHandler } from "../../../../libraries/auth/loginHandler";

export const POST = loginHandler(`${process.env.NEXT_PUBLIC_API_URL}/login`);
