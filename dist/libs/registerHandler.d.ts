/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-02 10:50:57
 * @Description:
 */
import { NextRequest, NextResponse } from "next/server";
export declare function registerHandler(apiUrl: string): (req: NextRequest) => Promise<NextResponse<{
    message: any;
}>>;
