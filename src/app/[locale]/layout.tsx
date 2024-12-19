import getLocale from '@/app/[locale]/getLocale';
import React from 'react';
import Providers from '@/app/[locale]/providers';
import clsx from 'clsx';
import { fontMontserrat, fontUnbounded } from '@/config/fonts';
import WebVitals from '@/web-vitals';

import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import './globals.css';
import '@/styles/styles.scss';

export type LangParams = {
    locale: string;
};

export async function generateMetadata({
    params,
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const t = await getLocale(params.locale);
    const { title, description, openGraph, twitter } = t.meta;

    return {
        title: {
            default: title,
            template: `%s - Unlimited performance business processes`,
        },
        description: description,
        icons: {
            icon: 'icon.ico',
        },
        openGraph: {
            type: 'website',
            locale: params.locale,
            title: openGraph.title,
            description: openGraph.description,
            siteName: 'Unlimited performance business processes',
            images: [
                {
                    url: 'https://raw.githubusercontent.com/vlad1slove1/landing/0d874073855452e04528c7115534401a4d4fa938/src/public/opengraph_logo.svg',
                    width: 1200,
                    height: 630,
                    alt: `${openGraph.title} - OpenGraph Image (1200x630)`,
                },
                {
                    url: 'https://raw.githubusercontent.com/vlad1slove1/landing/0d874073855452e04528c7115534401a4d4fa938/src/public/opengraph_logo.svg',
                    width: 600,
                    height: 315,
                    alt: `${openGraph.title} - OpenGraph Image (600x315)`,
                },
                {
                    url: 'https://raw.githubusercontent.com/vlad1slove1/landing/0d874073855452e04528c7115534401a4d4fa938/src/public/opengraph_logo.svg',
                    width: 1200,
                    height: 1200,
                    alt: `${openGraph.title} - OpenGraph Image (1200x1200)`,
                },
                {
                    url: 'https://raw.githubusercontent.com/vlad1slove1/landing/0d874073855452e04528c7115534401a4d4fa938/src/public/opengraph_logo.svg',
                    width: 400,
                    height: 400,
                    alt: `${openGraph.title} - OpenGraph Image (400x400)`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: twitter.title,
            description: twitter.description,
            images: [
                {
                    url: 'https://raw.githubusercontent.com/vlad1slove1/landing/0d874073855452e04528c7115534401a4d4fa938/src/public/opengraph_logo.svg',
                    width: 1200,
                    height: 630,
                    alt: `${twitter.title} - Twitter Image (1200x630)`,
                },
                {
                    url: 'https://raw.githubusercontent.com/vlad1slove1/landing/0d874073855452e04528c7115534401a4d4fa938/src/public/opengraph_logo.svg',
                    width: 600,
                    height: 315,
                    alt: `${twitter.title} - Twitter Image (600x315)`,
                },
            ],
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export async function generateStaticParams() {
    return [{ locale: 'ru' }, { locale: 'en' }];
}

export default function RootLayout({
    children,
    params,
}: Readonly<{
    children: ReactNode;
    params: LangParams;
}>) {
    return (
        <html lang={params.locale} suppressHydrationWarning>
            <body className={clsx('antialiased', fontMontserrat.variable, fontUnbounded.variable)}>
                <Providers params={params}>
                    {children}
                    <WebVitals />
                </Providers>
            </body>
        </html>
    );
}
