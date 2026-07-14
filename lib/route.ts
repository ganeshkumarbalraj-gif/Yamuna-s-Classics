import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "OK",
    application: "Yamuna&apos;s Classics",
    version: "1.0",
  });
}