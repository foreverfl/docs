import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: { overview: string[] } }
) {
  const { overview } = params;
  const [project] = overview;

  const filePath = path.join(
    process.cwd(),
    "public",
    "spring",
    "overview",
    `${project}.json`
  );

  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: "Data not found" }, { status: 404 });
  }
}
