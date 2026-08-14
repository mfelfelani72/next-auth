/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-12-31 06:00:17
 * @Description: Login API Route
 */

// Functions

import { registerHandler } from "../../../../libraries/auth/registerHandler";

export const POST = registerHandler(
  `${process.env.NEXT_PUBLIC_API_URL}/register`,
);
