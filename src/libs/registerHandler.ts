/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-02 10:50:57
 * @Description:
 */

import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";

export function registerHandler(apiUrl: string) {
  return async function POST(req: NextRequest) {
    try {
      const body = await req.json();

      if (
        !body.name ||
        !body.email ||
        !body.password ||
        !body.password_confirmation
      ) {
        return NextResponse.json(
          { message: "All fields are required" },
          { status: 400 }
        );
      }

      if (body.password !== body.password_confirmation) {
        return NextResponse.json(
          { message: "Passwords do not match" },
          { status: 400 }
        );
      }

      const response = await fetch(apiUrl, {
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
            maxAge: 60 * 15,
          })
        );

        return NextResponse.json(
          {
            message: "Registration successful",
            user: data.user,
          },
          { headers }
        );
      }

      return NextResponse.json(
        { message: data.message || "Registration failed" },
        { status: response.status }
      );
    } catch (err: any) {
      return NextResponse.json(
        { message: err.message || "Internal server error" },
        { status: 500 }
      );
    }
  };
}
