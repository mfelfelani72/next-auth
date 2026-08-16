import { NextRequest, NextResponse } from "next/server";
export declare function registerHandler(apiUrl: string): (req: NextRequest) => Promise<NextResponse<{
    message: any;
    success: boolean;
}>>;
