import React, { ReactNode } from 'react';
import Providers from '@/app/[lang]/providers';
import Footer from '@/components/Footer';
import Header from '@/components/ui/header/Header';
import { config } from '@/config/config';
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
        default: config.name,
        template: `%s - ${config.name}`,
    },
    description: config.description,
    icons: {
        icon: 'icon.ico',
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
                <Providers params={params}>
                    <Header />
                    <MainContainer children={children} />
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
