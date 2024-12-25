'use client';

import React, { StrictMode } from 'react';
import { LocaleProvider } from '@/context/LocaleContext';
import { useRouter } from 'next/navigation';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ProgressBar } from '@/context/ProgressBarContext';

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
                    <LocaleProvider initialLocale={params.locale}>
                        <ProgressBar className="fixed top-0 h-1 bg-primary">{children}</ProgressBar>
                    </LocaleProvider>
                </NextThemesProvider>
            </NextUIProvider>
        </StrictMode>
    );
};

export default Providers;
