import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { SignJWT } from 'jose';
import { db } from '@/lib/db';

export const POST = async (request: NextRequest) => {
    const { username, password } = await request.json();

    if (!username || !password) {
        return NextResponse.json({ error: 'Username and password are required.' }, { status: 400 });
    }

    const admin = await db
        .selectFrom('admin')
        .selectAll()
        .where('username', '=', username)
        .executeTakeFirst();

    if (!admin || !(await bcrypt.compare(password, admin.password))) {
        return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new SignJWT({ id: admin.id, username: admin.username })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('7d')
        .sign(secret);

    const response = NextResponse.json({ message: 'Login successful', token });
    response.cookies.set('token', token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60,
    });

    return response;
};
