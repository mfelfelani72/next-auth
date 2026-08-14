/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-19
 * @Description: Middleware with language and device detection
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { detectDeviceFromUA } from "forma-li";

export async function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();

  // ----------------------------
  // Handle language
  // ----------------------------
  const cookieLang = request.cookies.get("app_lang")?.value;
  let defaultLang = "en";

  if (cookieLang) {
    try {
      const parsed = JSON.parse(cookieLang);
      if (parsed.state?.lang) {
        defaultLang = parsed.state.lang;
      }
    } catch (error) {
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

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
