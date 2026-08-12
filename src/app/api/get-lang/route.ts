// app/api/get-lang/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const cookieLang = req.cookies.get("app_lang")?.value;
    
    let lang = "en";
    let dir = "ltr";

    if (cookieLang) {
      try {
        const parsed = JSON.parse(cookieLang);
        if (parsed.state?.lang) {
          lang = parsed.state.lang;
          dir = parsed.state.dir || "ltr";
        }
      } catch (error) {
        console.error("Error parsing cookie:", error);
      }
    }

    return NextResponse.json({ lang, dir });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}