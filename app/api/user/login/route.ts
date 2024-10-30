import { executeQuery } from "@/app/api/database/database"
import { compare } from "bcrypt"
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request : NextRequest) {
    const requestBody = await request.json(); // Parse JSON body
    const username = requestBody.username; // Access username from JSON
    const password = requestBody.password; // Access password from JSON
    
    if (typeof username !== 'string' || typeof password !== 'string') {
        return new Response('Invalid form data', { status: 400 });
    }

    const res = await executeQuery("SELECT registered_user.id, role.role, role.perm_level, registered_user.password FROM `registered_user` INNER JOIN `role` ON role.id=registered_user.role_id WHERE `username`=?",[username])
    
    if (res.length !== 1) {
        return new Response('Invalid credentials', { status: 400 });
    }
    
    const isValid = await compare(password, res[0].password);

    if (isValid && res[0].perm_level > 0) {
        const secretKey = process.env.JWT_SECRET || "your_jwt_secret"; // Ensure you have a secret key in .env
        const token = jwt.sign(
            {
                userId: res[0].id,
                role: res[0].role
            },
            secretKey,
            {
                expiresIn: "1800s", // Token expiration time (1 hour)
            }
        );
        
        const response = NextResponse.json({ message : "Login Success" });
        response.cookies.set({
            name: 'token',
            value: token,
            httpOnly: false, // HTTP-only cookie
            secure: false,
            maxAge: 1800, // 1 hour in seconds
            path: '/',
        });

        return response;
    }

    return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
}