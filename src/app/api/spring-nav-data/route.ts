import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "spring",
    "spring-nav-data.json"
  );
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const navigationData = JSON.parse(fileContents);

  return NextResponse.json(navigationData);
}
