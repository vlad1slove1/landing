/* eslint-disable max-len */

import { VCF_FILE_EXTENSION } from '@/lib/constants';
import { NextRequest, NextResponse } from 'next/server';
import { vCards } from '@/config/config';

export const GET = async (request: NextRequest) => {
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get('name');

    if (!name) {
        return NextResponse.json({ error: 'Name parameter is required' }, { status: 400 });
    }

    const vCardContent = vCards[name.toLowerCase()];

    if (!vCardContent) {
        return NextResponse.json({ error: `vCard for '${name}' not found` }, { status: 404 });
    }

    const headers = new Headers({
        'Content-Type': 'text/x-vcard;charset=utf-8;',
        'Content-Disposition': `attachment; filename="${name.toLowerCase()}_contact${VCF_FILE_EXTENSION}"`,
    });

    return new NextResponse(vCardContent, { headers });
};
