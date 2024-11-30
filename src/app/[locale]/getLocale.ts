import type { Content } from '@/types/content';

const getLocale = async (locale: string): Promise<Content> => {
    try {
        const translations = await import(`./locales/${locale}.json`);
        return translations.default as Content;
    } catch (error) {
        throw new Error(
            // eslint-disable-next-line max-len
            `Failed to load locale '${locale}': ${error instanceof Error ? error.message : String(error)}`
        );
    }
};

export default getLocale;
