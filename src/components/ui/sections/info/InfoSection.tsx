import React from 'react';
import getLocale from '@/app/[lang]/getLocale';
import Image from 'next/image';
import info from '@/public/info.svg';

import type { LangParams } from '@/app/[lang]/layout';

import styles from './InfoSection.module.scss';

const InfoSection: React.FC<LangParams> = async ({ lang }) => {
    const t = await getLocale(lang);
    const { label, backgroundLabel, paragraphs } = t.sections.info;

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.backgroundLabel}>{backgroundLabel}</div>
                <div className={styles.flexContainer}>
                    <ul>
                        <li>{label}</li>
                    </ul>
                    <div className={styles.paragraphs}>
                        {Object.values(paragraphs).map((paragraph) => (
                            <p>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>

            <Image src={info} alt="Info image" priority={false} className={styles.image} />
        </div>
    );
};

export default InfoSection;
