import { NextRequest, NextResponse } from 'next/server';
import { Path } from '@/lib/enums';
import { jwtVerify } from 'jose';

export const middleware = async (request: NextRequest) => {
    const token = request.cookies.get('token')?.value;

    if (!token) {
        return NextResponse.redirect(new URL(Path.LOGIN, request.url));
    }

    try {
        await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET!));
        return NextResponse.next();
    } catch (error) {
        console.error('JWT Verification Error:', error);
    }
};

export const config = {
    matcher: ['/admin'],
};
