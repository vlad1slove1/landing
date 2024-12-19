import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

    return [
        generateSitemapEntry('', 1, siteUrl),
        generateSitemapEntry('/contacts', 0.8, siteUrl),
        generateSitemapEntry('/privacy', 0.5, siteUrl),
    ];
}

const generateSitemapEntry = (path: string, priority: number, siteUrl: string) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    priority,
    alternates: {
        languages: {
            ru: `${siteUrl}/ru${path}`,
            en: `${siteUrl}/en${path}`,
        },
    },
});
