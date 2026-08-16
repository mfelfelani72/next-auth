/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-19
 * @Description: Middleware with language and device detection
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export declare function proxy(request: NextRequest): Promise<NextResponse<unknown>>;
export declare const config: {
    matcher: string[];
};
