import React from 'react';
import getLocale from '@/app/[lang]/locales';
import { Logo } from '@/components/icon/Icons';
import StyledButton from '@/components/ui/StyledButton/StyledButton';
import Image from 'next/image';
import ellipse1 from '@/public/ellipse1.svg';
import ellipse2 from '@/public/ellipse2.svg';

import type { LangParams } from '@/app/[lang]/layout';

import styles from './GeneralSection.module.scss';

const GeneralSection: React.FC<LangParams> = async ({ lang }) => {
    const t = await getLocale(lang);
    return (
        <div className={styles.bg}>
            <div className={styles.section}>
                <div className={styles.topContent}>
                    <Logo className={styles.logo} />

                    <h1 className={styles.h1}>
                        {t.sections.general.h11}
                        <br />
                        {t.sections.general.h12}
                    </h1>
                </div>

                <p className={styles.p1}>{t.sections.general.p1}</p>

                <h1 className={styles.h2}>
                    {t.sections.general.h21}
                    <br />
                    {t.sections.general.h22}
                    <br />
                    {t.sections.general.h23}
                </h1>

                <StyledButton label={t?.sections.general.button} className={styles.button} />
            </div>
            <Image alt="White ellipse" src={ellipse1} priority className={styles.bg1} />
            <Image alt="Light-blue ellipse" src={ellipse2} priority className={styles.bg2} />
        </div>
    );
};

export default GeneralSection;
