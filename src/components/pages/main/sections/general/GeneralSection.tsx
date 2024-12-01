import React from 'react';
import getLocale from '@/app/[locale]/getLocale';
import { Link } from '@nextui-org/link';
import { ElementId, Path } from '@/lib/enums';
import { Logo } from '@/components/icon/Icons';
import Image from 'next/image';
import StyledButtonWrapper from '@/components/pages/styledButton/StyledButtonWrapper';
import ellipse1 from '@/public/ellipse1.svg';
import ellipse2 from '@/public/ellipse2.svg';

import type { LangParams } from '@/app/[locale]/layout';

import styles from './GeneralSection.module.scss';

const GeneralSection: React.FC<LangParams> = async ({ locale }) => {
    const t = await getLocale(locale);
    const { h1, p1, h2, button } = t.sections.general;

    return (
        <div id={ElementId.GENERAL_SECTION} className={styles.bg}>
            <div className={styles.section}>
                <div className={styles.topContent}>
                    <Link href={Path.HOME}>
                        <Logo className={styles.logo} />
                    </Link>

                    <h1 className={styles.h1}>{h1}</h1>
                </div>

                <p className={styles.p1}>{p1}</p>

                <h1 className={styles.h2}>{h2}</h1>

                <StyledButtonWrapper
                    label={button}
                    className={styles.button}
                    scrollTo={ElementId.FORM_SECTION}
                />
            </div>
            <Image alt="White ellipse" src={ellipse1} priority={false} className={styles.bg1} />
            <Image
                alt="Light-blue ellipse"
                src={ellipse2}
                priority={false}
                className={styles.bg2}
            />
        </div>
    );
};

export default GeneralSection;
