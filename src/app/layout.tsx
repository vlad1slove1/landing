import './globals.css';
import Providers from '@/app/providers';
import Footer from '@/components/nav/Footer';
import Header from '@/components/nav/Header';
import { fontSans } from '@/config/fonts';
import siteConfig from '@/config/SiteConfig';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';

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
                        <main className="container mx-auto max-w-7xl my-14 pt-8 px-6 flex-grow">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
