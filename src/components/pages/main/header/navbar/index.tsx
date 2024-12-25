import React from 'react';
import getLocale from '@/app/[locale]/getLocale';
import CustomLink from '@/components/ui/customLink';
import LanguageSelector from '@/components/pages/main/header/languageSelector';
import { HEADER_HEIGHT } from '@/lib/constants';

import styles from './index.module.scss';

export default async function Navbar({ locale }: { locale: string }) {
    const t = await getLocale(locale);
    const { navbar } = t.header;

    return (
        <div className={styles.navbar}>
            <div className={styles.items}>
                {navbar &&
                    Object.values(navbar).map(({ label, scrollId, href }, idx) => (
                        <CustomLink
                            key={idx}
                            href={href || '#'}
                            scrollId={scrollId}
                            offset={HEADER_HEIGHT}
                            className={styles.link}
                        >
                            {label}
                        </CustomLink>
                    ))}
            </div>

            <LanguageSelector />
        </div>
    );
}
