/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-12-31 06:00:17
 * @Description: Login handler with Next.js native cookies
 */
import { NextResponse } from "next/server";
// Functions
import { cns } from "forma-li";
export function loginHandler(apiUrl) {
    return async function POST(req) {
        var _a, _b;
        try {
            const body = await req.json();
            const data = await cns({
                method: "post",
                endPoint: apiUrl,
                body: body,
                route: "/login",
            });
            if (!data) {
                return NextResponse.json({
                    message: "No response from server",
                    success: false,
                }, { status: 500 });
            }
            if (data.success && ((_b = (_a = data.data) === null || _a === void 0 ? void 0 : _a.token) === null || _b === void 0 ? void 0 : _b.access_token)) {
                const res = NextResponse.json({
                    message: "Login successful",
                    success: true,
                    user: data.data.user,
                });
                const cookieOptions = {
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "strict",
                    path: "/",
                    maxAge: 60 * 60 * 24 * 7,
                };
                res.cookies.set(Object.assign(Object.assign({ name: "accessToken", value: data.data.token.access_token }, cookieOptions), { httpOnly: true }));
                res.cookies.set(Object.assign(Object.assign({ name: "tokenType", value: data.data.token.token_type || "Bearer" }, cookieOptions), { httpOnly: true }));
                res.cookies.set(Object.assign(Object.assign({ name: "user", value: JSON.stringify(data.data.user) }, cookieOptions), { httpOnly: false }));
                res.cookies.set(Object.assign(Object.assign({ name: "isLoggedIn", value: "true" }, cookieOptions), { httpOnly: false }));
                return res;
            }
            return NextResponse.json({
                message: data.message || "Login failed",
                success: false,
            }, { status: 401 });
        }
        catch (err) {
            console.error("Login error:", err);
            return NextResponse.json({
                message: err.message || "Internal server error",
                success: false,
            }, { status: 500 });
        }
    };
}
