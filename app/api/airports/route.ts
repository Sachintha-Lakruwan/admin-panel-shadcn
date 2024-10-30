import { NextResponse } from "next/server";
import { executeQuery } from "@/app/api/database/database";

export async function GET() {
  const countries = await executeQuery(
    "SELECT `name` as `label`, `code` as `key` FROM airport"
  );
  return NextResponse.json(countries);
}
