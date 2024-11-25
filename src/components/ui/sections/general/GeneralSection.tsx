import React from 'react';
import getLocale from '@/app/[lang]/getLocale';
import { Link } from '@nextui-org/link';
import { Path } from '@/lib/enums';
import { Logo } from '@/components/icon/Icons';
import StyledButton from '@/components/ui/styledButton/StyledButton';
import Image from 'next/image';
import ellipse1 from '@/public/ellipse1.svg';
import ellipse2 from '@/public/ellipse2.svg';

import type { LangParams } from '@/app/[lang]/layout';

import styles from './GeneralSection.module.scss';

const GeneralSection: React.FC<LangParams> = async ({ lang }) => {
    const t = await getLocale(lang);
    const { h1, p1, h2, button } = t.sections.general;
    return (
        <div className={styles.bg}>
            <div className={styles.section}>
                <div className={styles.topContent}>
                    <Link href={Path.HOME}>
                        <Logo className={styles.logo} />
                    </Link>

                    <h1 className={styles.h1}>{h1}</h1>
                </div>

                <p className={styles.p1}>{p1}</p>

                <h1 className={styles.h2}>{h2}</h1>

                <StyledButton label={button} className={styles.button} />
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
