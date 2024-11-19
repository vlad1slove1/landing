import React, { ReactNode } from 'react';
import Providers from '@/app/[lang]/providers';
import Footer from '@/components/Footer';
import Header from '@/components/ui/header/Header';
import siteConfig from '@/config/siteConfig';
import clsx from 'clsx';
import MainContainer from '@/components/MainContainer';

import type { Metadata } from 'next';

import './globals.css';
import '@/styles/styles.scss';
import { fontMontserrat, fontUnbounded } from '@/config/fonts';

export type LangParams = {
    lang: string;
};

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: '/favicon.ico',
    },
};

export async function generateStaticParams() {
    return [{ lang: 'ru' }, { lang: 'en' }];
}

export default function RootLayout({
    children,
    params,
}: Readonly<{
    children: ReactNode;
    params: LangParams;
}>) {
    return (
        <html lang={params.lang} suppressHydrationWarning>
            <body className={clsx('antialiased', fontMontserrat.variable, fontUnbounded.variable)}>
                <Providers>
                    <Header lang={params.lang} />
                    <MainContainer children={children} />
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
