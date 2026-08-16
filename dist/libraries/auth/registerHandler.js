/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-12-31 06:00:17
 * @Description: Register handler with Next.js native cookies
 */
import { NextResponse } from "next/server";
import { cns } from "forma-li";
export function registerHandler(apiUrl) {
    console.log("l.ksdhfkjsdfkjsds");
    return async function POST(req) {
        var _a, _b;
        try {
            const body = await req.json();
            console.log(body);
            const { name, email, password, confirmPassword } = body;
            if (!email || !password || !confirmPassword) {
                return NextResponse.json({
                    message: "Email and password are required",
                    success: false,
                    errors: {
                        email: !email ? "Email is required" : undefined,
                        password: !password ? "Password is required" : undefined,
                        confirmPassword: !confirmPassword
                            ? "Confirm password is required"
                            : undefined,
                    },
                }, { status: 400 });
            }
            if (password !== confirmPassword) {
                return NextResponse.json({
                    message: "Passwords do not match",
                    success: false,
                    errors: {
                        confirmPassword: "Passwords do not match",
                    },
                }, { status: 400 });
            }
            if (password.length < 6) {
                return NextResponse.json({
                    message: "Password must be at least 6 characters",
                    success: false,
                    errors: {
                        password: "Password must be at least 6 characters",
                    },
                }, { status: 400 });
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                return NextResponse.json({
                    message: "Invalid email format",
                    success: false,
                    errors: {
                        email: "Invalid email format",
                    },
                }, { status: 400 });
            }
            // ============================================
            // Build payload for backend API
            // name رو از email میسازیم
            // ============================================
            const nameFromEmail = email.split("@")[0];
            const displayName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
            const payload = {
                name: displayName,
                email: email.trim().toLowerCase(),
                password: password,
                password_confirmation: confirmPassword,
                username: nameFromEmail.toLowerCase(),
            };
            console.log(payload);
            // ============================================
            // Send request to backend
            // ============================================
            const data = await cns({
                method: "post",
                endPoint: apiUrl,
                body: payload,
                route: "/register",
            });
            if (!data) {
                return NextResponse.json({
                    message: "No response from server",
                    success: false,
                }, { status: 500 });
            }
            // ============================================
            // Success - set cookies if token exists
            // ============================================
            if (data.success && ((_a = data.data) === null || _a === void 0 ? void 0 : _a.user)) {
                const res = NextResponse.json({
                    message: data.message || "Registration successful",
                    success: true,
                    user: data.data.user,
                });
                const cookieOptions = {
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "strict",
                    path: "/",
                    maxAge: 60 * 60 * 24 * 7,
                };
                if ((_b = data.data.token) === null || _b === void 0 ? void 0 : _b.access_token) {
                    res.cookies.set(Object.assign(Object.assign({ name: "accessToken", value: data.data.token.access_token }, cookieOptions), { httpOnly: true }));
                    res.cookies.set(Object.assign(Object.assign({ name: "tokenType", value: data.data.token.token_type || "Bearer" }, cookieOptions), { httpOnly: true }));
                }
                res.cookies.set(Object.assign(Object.assign({ name: "user", value: JSON.stringify(data.data.user) }, cookieOptions), { httpOnly: false }));
                res.cookies.set(Object.assign(Object.assign({ name: "isLoggedIn", value: "true" }, cookieOptions), { httpOnly: false }));
                return res;
            }
            // ============================================
            // Failed response from backend
            // ============================================
            return NextResponse.json({
                message: data.message || "Registration failed",
                success: false,
                errors: data.errors,
            }, { status: 400 });
        }
        catch (err) {
            console.error("Registration error:", err);
            return NextResponse.json({
                message: err.message || "Internal server error",
                success: false,
            }, { status: 500 });
        }
    };
}
