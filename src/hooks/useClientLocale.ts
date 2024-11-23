import { useContext } from 'react';
import { LocaleContext } from '@/context';

const useLocale = <T = Record<string, any>>() => {
    const context = useContext(LocaleContext);

    if (!context) {
        throw new Error('useLocale must be used within a LocaleProvider');
    }

    return context as unknown as { translations: T; locale: string };
};

export default useLocale;
