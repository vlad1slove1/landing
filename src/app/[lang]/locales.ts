const locales: Record<string, () => Promise<Record<string, any>>> = {
    ru: () => import('./locales/ru.json').then((module) => module.default),
    en: () => import('./locales/en.json').then((module) => module.default),
};

const getLocale = async (locale: string) => {
    const loadLocale = locales[locale];
    if (!loadLocale) {
        throw new Error(`Locale '${locale}' is not supported.`);
    }
    return loadLocale();
};

export default getLocale;
