import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";

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

      if (response.ok && data.accessToken) {
        const headers = new Headers();
        headers.append(
          "Set-Cookie",
          cookie.serialize("accessToken", data.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 15, // 15 دقیقه
          })
        );
        return NextResponse.json({ message: "Login successful" }, { headers });
      }

      return NextResponse.json(
        { message: data.message || "Login failed" },
        { status: response.status }
      );
    } catch (err: any) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    }
  };
}
