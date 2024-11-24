import { useContext } from 'react';
import { LocaleContext } from '@/context';

import type { Content } from '@/types/content';

const useLocale = () => {
    const context = useContext(LocaleContext);

    if (!context) {
        throw new Error('useLocale must be used within a LocaleProvider');
    }

    return context as unknown as { translations: Content; locale: string };
};

export default useLocale;
