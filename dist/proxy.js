/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-19
 * @Description: Middleware with language and device detection
 *
 */
import { NextResponse } from "next/server";
// Functions
import { detectDeviceFromUA } from "@/libraries/detectDeviceFromUA";
// ⚠️ نکته مهم: نام تابع باید `middleware` باشد، نه `proxy`
export async function proxy(request) {
    var _a, _b, _c;
    const url = request.nextUrl.clone();
    // ----------------------------
    // Handle language
    // ----------------------------
    const cookieLang = (_a = request.cookies.get("app_lang")) === null || _a === void 0 ? void 0 : _a.value;
    let defaultLang = "en";
    if (cookieLang) {
        try {
            const parsed = JSON.parse(cookieLang);
            if ((_b = parsed.state) === null || _b === void 0 ? void 0 : _b.lang) {
                defaultLang = parsed.state.lang;
            }
        }
        catch (error) {
            defaultLang = cookieLang;
        }
    }
    if (url.pathname === "/") {
        url.pathname = `/${defaultLang}/${process.env.NEXT_PUBLIC_BASE_ROUTE}`;
        return NextResponse.redirect(url);
    }
    // ----------------------------
    // Handle device detection
    // ----------------------------
    const ua = request.headers.get("user-agent") || "";
    const device = detectDeviceFromUA(ua);
    const existingDevice = (_c = request.cookies.get("device-type")) === null || _c === void 0 ? void 0 : _c.value;
    if (!existingDevice) {
        const res = NextResponse.next();
        res.cookies.set({
            name: "device-type",
            value: device,
            path: "/",
            maxAge: 60 * 60 * 24 * 365,
            httpOnly: false,
            sameSite: "lax",
        });
        return res;
    }
    return NextResponse.next();
}
export const config = {
    matcher: ["/", "/:path*"],
};
