import React from 'react';
import Providers from '@/app/[locale]/providers';
import { config } from '@/config/config';
import clsx from 'clsx';

import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import './globals.css';
import '@/styles/styles.scss';
import { fontMontserrat, fontUnbounded } from '@/config/fonts';

export type LangParams = {
    locale: string;
};

export const metadata: Metadata = {
    title: {
        default: config.name,
        template: `%s - ${config.name}`,
    },
    description: config.description,
    icons: {
        icon: 'icon.ico',
    },
};

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
