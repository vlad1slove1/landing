'use client';

import React, { createContext, useState, useEffect } from 'react';
import getLocale from '@/app/[lang]/locales';

import type { ReactNode } from 'react';

type LocaleContextType = {
    locale: string;
    translations: Record<string, string>;
    setLocale: (locale: string) => void;
};

export const LocaleContext = createContext<LocaleContextType | null>(null);

export const LocaleProvider = ({
    children,
    initialLocale,
}: {
    children: ReactNode;
    initialLocale: string;
}) => {
    const [locale, setLocale] = useState(initialLocale);
    const [translations, setTranslations] = useState<Record<string, string>>({});

    useEffect(() => {
        const loadTranslations = async () => {
            try {
                const loadedTranslations = await getLocale(locale);
                setTranslations(loadedTranslations);
            } catch (error) {
                console.error(`Failed to load translations for locale '${locale}':`, error);
            }
        };

        loadTranslations();
    }, [locale]);

    return (
        <LocaleContext.Provider value={{ locale, translations, setLocale }}>
            {children}
        </LocaleContext.Provider>
    );
};
