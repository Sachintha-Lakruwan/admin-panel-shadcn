// src/app/api/analytics/revenue/route.ts
//NEEDS FIXING
import { NextResponse } from "next/server";
import { getRevenueByAircraftType } from "@/services/databaseService";

export async function GET() {
    // Fetch revenue data directly without caching
    const revenue = await getRevenueByAircraftType();

    return NextResponse.json(revenue);
}
