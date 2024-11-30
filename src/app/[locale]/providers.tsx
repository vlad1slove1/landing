'use client';

import React, { StrictMode } from 'react';
import { LocaleProvider } from '@/context';
import { useRouter } from 'next/navigation';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import type { ReactNode } from 'react';
import type { LangParams } from '@/app/[locale]/layout';

type Props = {
    children: ReactNode;
    params: LangParams;
};

const Providers: React.FC<Props> = ({ children, params }) => {
    const router = useRouter();

    return (
        <StrictMode>
            <NextUIProvider navigate={router.push}>
                <NextThemesProvider attribute="class" defaultTheme="light">
                    <LocaleProvider initialLocale={params.locale}>{children}</LocaleProvider>
                </NextThemesProvider>
            </NextUIProvider>
        </StrictMode>
    );
};

export default Providers;
