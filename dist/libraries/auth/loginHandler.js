// src/libraries/auth/loginHandler.ts
import { NextResponse } from "next/server";
export function loginHandler(apiUrl) {
    return async function POST(req) {
        var _a, _b;
        try {
            const body = await req.json();
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(body),
            });
            const responseText = await response.text();
            // ==== اینجا خطا رو برمی‌گردونیم ====
            if (responseText.startsWith('<!DOCTYPE') || responseText.startsWith('<html')) {
                return NextResponse.json({
                    success: false,
                    message: 'API returned HTML instead of JSON',
                    error: {
                        url: apiUrl,
                        status: response.status,
                        htmlPreview: responseText.substring(0, 200),
                    }
                }, { status: 500 });
            }
            const data = JSON.parse(responseText);
            if (!data.success || !((_b = (_a = data.data) === null || _a === void 0 ? void 0 : _a.token) === null || _b === void 0 ? void 0 : _b.access_token)) {
                return NextResponse.json({
                    success: false,
                    message: data.message || 'Login failed',
                    error: data,
                }, { status: 401 });
            }
            // موفقیت
            const res = NextResponse.json({
                success: true,
                message: "Login successful",
                user: data.data.user,
            });
            res.cookies.set({
                name: "accessToken",
                value: data.data.token.access_token,
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                path: "/",
                maxAge: 60 * 60 * 24 * 7,
            });
            return res;
        }
        catch (err) {
            // ==== هر خطای دیگه ====
            return NextResponse.json({
                success: false,
                message: err.message || 'Internal server error',
                error: {
                    name: err.name,
                    message: err.message,
                    stack: err.stack,
                }
            }, { status: 500 });
        }
    };
}
