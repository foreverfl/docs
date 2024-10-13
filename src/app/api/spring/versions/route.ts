import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "spring",
    "spring-versions.json"
  );

  try {
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const versions = JSON.parse(fileContents);
    return NextResponse.json(versions);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch versions data" },
      { status: 500 }
    );
  }
}
