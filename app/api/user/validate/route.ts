import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request : NextRequest) {
    const requestBody = await request.json();

    const token = requestBody.token

    if (typeof token !== 'string') {
        return new Response('Invalid form data', { status: 400 });
    }

    const secretKey = process.env.JWT_SECRET || "your_jwt_secret"

    // console.log(token)

    try {
        const data = jwt.verify(token, secretKey) as { userId: number, role: string } // Type assertion

        if (data.role != "admin") {
            return NextResponse.json({ message: 'Invalid token' }, { status: 400 }); // Bad Request
        }

        return NextResponse.json({ message: 'Valid token' }, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Invalid token' }, { status: 400 }); // Bad Request
    }
}