/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-12-31 06:00:17
 * @Description: Login handler with Next.js native cookies
 */

import { NextRequest, NextResponse } from "next/server";

export function loginHandler(apiUrl: string) {
  return async function POST(req: NextRequest) {
    try {
      const body = await req.json();

      const response = await fetch(`${apiUrl}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (data.success && data.data?.token?.access_token) {
        const res = NextResponse.json({
          message: "Login successful",
          success: true,
          user: data.data.user,
        });

        const cookieOptions = {
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict" as const,
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        };

        // accessToken
        res.cookies.set({
          name: "accessToken",
          value: data.data.token.access_token,
          ...cookieOptions,
          httpOnly: true,
        });

        // tokenType
        res.cookies.set({
          name: "tokenType",
          value: data.data.token.token_type || "Bearer",
          ...cookieOptions,
          httpOnly: true,
        });

        // user
        res.cookies.set({
          name: "user",
          value: JSON.stringify(data.data.user),
          ...cookieOptions,
          httpOnly: false,
        });

        // isLoggedIn
        res.cookies.set({
          name: "isLoggedIn",
          value: "true",
          ...cookieOptions,
          httpOnly: false,
        });

        return res;
      }

      return NextResponse.json(
        {
          message: data.message || "Login failed",
          success: false,
        },
        { status: response.status || 401 },
      );
    } catch (err: any) {
      console.error("Login error:", err);
      return NextResponse.json(
        {
          message: err.message || "Internal server error",
          success: false,
        },
        { status: 500 },
      );
    }
  };
}
