import React from 'react';
import getLocale from '@/app/[locale]/getLocale';
import Image from 'next/image';
import info from '@/public/info.svg';
import { ElementId } from '@/lib/enums';

import type { LangParams } from '@/app/[locale]/layout';

import styles from './InfoSection.module.scss';

const InfoSection: React.FC<LangParams> = async ({ locale }) => {
    const t = await getLocale(locale);
    const { label, backgroundLabel, paragraphs } = t.sections.info;

    return (
        <div id={ElementId.INFO_SECTION} className={styles.main}>
            <div className={styles.container}>
                <div className={styles.backgroundLabel}>{backgroundLabel}</div>
                <div className={styles.flexContainer}>
                    <ul>
                        <li>{label}</li>
                    </ul>
                    <div className={styles.paragraphs}>
                        {Object.values(paragraphs).map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>

            <Image src={info} alt="Info image" priority={false} className={styles.image} />
        </div>
    );
};

export default InfoSection;
