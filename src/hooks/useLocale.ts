import { useState, useEffect } from 'react';
import getLocale from '@/app/[lang]/getLocale';

import type { Content } from '@/types/content';

const useLocale = (lang: string) => {
    const [locale, setLocale] = useState<Content>({} as Content);

    useEffect(() => {
        const loadLocale = async () => {
            const loadedLocale = await getLocale(lang);
            setLocale(loadedLocale as Content);
        };

        loadLocale();
    }, [lang]);

    return locale;
};

export default useLocale;
