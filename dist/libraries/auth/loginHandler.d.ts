import { NextRequest, NextResponse } from "next/server";
export declare function loginHandler(apiUrl: string): (req: NextRequest) => Promise<NextResponse<{
    success: boolean;
    message: any;
    error: any;
}> | NextResponse<{
    success: boolean;
    message: string;
    user: any;
}>>;
