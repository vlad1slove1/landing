import './globals.css';
import Providers from '@/app/providers';
import Footer from '@/components/Footer';
import Header from '@/components/nav/Header';
import { fontSans } from '@/config/fonts';
import siteConfig from '@/config/siteConfig';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import MainContainer from '@/components/MainContainer';

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

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={clsx(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable
                )}
            >
                <Providers>
                    <div className="flex flex-col h-screen">
                        <Header />
                        <MainContainer children={children} />
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
