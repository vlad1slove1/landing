import getLocale from '@/app/[locale]/getLocale';
import React from 'react';
import Providers from '@/app/[locale]/providers';
import clsx from 'clsx';
import { fontMontserrat, fontUnbounded } from '@/config/fonts';

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
    const { title, description, openGraph } = t.meta;

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
                    url: '',
                    width: 1200,
                    height: 630,
                    alt: `${openGraph.title} - OpenGraph Image`,
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
                <Providers params={params}>{children}</Providers>
            </body>
        </html>
    );
}
