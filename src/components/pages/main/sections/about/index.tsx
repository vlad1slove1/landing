import React from 'react';
import CardsWrapper from '@/components/pages/main/sections/about/CardsWrapper';
import { ElementId } from '@/lib/enums';
import getLocale from '@/app/[locale]/getLocale';

import type { LangParams } from '@/app/[locale]/layout';

import styles from '@/components/pages/main/sections/about/index.module.scss';

export default async function AboutSection({ locale }: LangParams) {
    const t = await getLocale(locale);
    const { h1, cards } = t.sections.about;

    return (
        <div className={styles.bg}>
            <div id={ElementId.ABOUT_SECTION} className={styles.container}>
                <div className={styles.topContent}>
                    <h1>{h1}</h1>
                </div>
                <CardsWrapper cards={cards} />
            </div>
        </div>
    );
}
