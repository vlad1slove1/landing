import { useState, useEffect } from 'react';
import getLocale from '@/app/[lang]/locales';

const useLocale = (lang: string) => {
    const [locale, setLocale] = useState<Record<string, any> | null>(null);

    useEffect(() => {
        const loadLocale = async () => {
            const loadedLocale = await getLocale(lang);
            setLocale(loadedLocale);
        };

        loadLocale();
    }, [lang]);

    return locale;
};

export default useLocale;
