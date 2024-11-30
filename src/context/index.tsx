'use client';

import React, { createContext, useState, useEffect, useCallback } from 'react';
import getLocale from '@/app/[locale]/getLocale';

import type { ReactNode } from 'react';
import type { Content } from '@/types/content';

type LocaleContextType = {
    locale: string;
    translations: Content;
    setLocale: (locale: string) => void;
};

export const LocaleContext = createContext<LocaleContextType>({} as LocaleContextType);

export const LocaleProvider = ({
    children,
    initialLocale,
}: {
    children: ReactNode;
    initialLocale: string;
}) => {
    const [locale, setLocale] = useState(initialLocale);
    const [translations, setTranslations] = useState<Content>({} as Content);

    const loadTranslations = useCallback(async (selectedLocale: string) => {
        try {
            const loadedTranslations = await getLocale(selectedLocale);
            setTranslations(loadedTranslations);
        } catch (error) {
            console.error(`Failed to load translations for locale '${selectedLocale}':`, error);
        }
    }, []);

    useEffect(() => {
        loadTranslations(locale);
    }, [locale, loadTranslations]);

    return (
        <LocaleContext.Provider value={{ locale, translations, setLocale }}>
            {children}
        </LocaleContext.Provider>
    );
};
