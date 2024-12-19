import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';
import { NextRequest, NextResponse } from 'next/server';

const locales = ['ru', 'en'];
const defaultLocale = 'ru';
const cookieName = 'i18nlang';

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest): string {
    // Get locale from cookie
    if (request.cookies.has(cookieName)) return request.cookies.get(cookieName)!.value;
    // Get accept language from HTTP headers
    const acceptLang = request.headers.get('Accept-Language');
    if (!acceptLang) return defaultLocale;
    // Get match locale
    const headers = { 'accept-language': acceptLang };
    const languages = new Negotiator({ headers }).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Skip translation logic for robots.txt, sitemap.xml, and static files
    if (
        pathname === '/robots.txt' ||
        pathname === '/sitemap.xml' ||
        pathname.startsWith('/_next') ||
        pathname === '/favicon.ico'
    ) {
        return NextResponse.next();
    }

    // Check if there is any supported locale in the pathname
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return NextResponse.next();

    // Redirect if there is no locale
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    const response = NextResponse.redirect(request.nextUrl);
    // Set locale to cookie
    response.cookies.set(cookieName, locale);
    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - robots.txt (robots file)
         * - sitemap.xml (sitemap file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
    ],
};
