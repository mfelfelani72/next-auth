import { NextRequest, NextResponse } from "next/server";
export declare function loginHandler(apiUrl: string): (req: NextRequest) => Promise<NextResponse<{
    message: any;
}>>;
