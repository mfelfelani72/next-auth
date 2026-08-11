// app/api/set-lang/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { lang, dir } = body;

    if (!lang) {
      return NextResponse.json(
        { error: "Language is required" },
        { status: 400 },
      );
    }

    const res = NextResponse.json({
      success: true,
      message: "Language set successfully",
      lang,
      dir,
    });

    res.cookies.set({
      name: "app_lang",
      value: JSON.stringify({
        state: {
          lang: lang,
          dir: dir || "ltr",
        },
      }),
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: false,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return res;
  } catch (error: any) {
    console.error("Error setting language cookie:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 },
    );
  }
}
