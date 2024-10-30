import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log("hello redirect");

  const token = request.cookies.get("token");

  if (!token) {
    console.log("No token in cookie so redirect");
    return NextResponse.redirect(new URL("/", request.url));
  }

  const response = await fetch(`${request.nextUrl.origin}/api/user/validate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: token.value }),
  });

  if (!response.ok) {
    console.log("Response not ok so redirect");
    return NextResponse.redirect(new URL("/", request.url));
  }

  console.log("let go no redirect");
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/view_passengers",
    "/total_revenue",
    "/passenger_count_by_destination",
    "/bookings_by_type",
    "/flight_history",
  ], // Adjust the path as needed
};
