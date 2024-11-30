import React from 'react';
import getLocale from '@/app/[locale]/getLocale';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import clsx from 'clsx';

import type { LangParams } from '@/app/[locale]/layout';

import styles from './AboutSection.module.scss';

const AboutSection: React.FC<LangParams> = async ({ locale }) => {
    const t = await getLocale(locale);
    const {
        h1,
        cards: { c1, c2, c3 },
    } = t.sections.about;
    return (
        <div className={styles.bg}>
            <div className={styles.section}>
                <div className={styles.topContent}>
                    <h1>{h1}</h1>
                </div>
                <div className={styles.cards}>
                    <div className={styles.firstRow}>
                        {[c1, c2].map((it, idx) => (
                            <Card key={`card_${idx}`} className={styles.card}>
                                <CardHeader className={styles.cHead}>
                                    <p>{it.header}</p>
                                </CardHeader>
                                <CardBody className={styles.cBody}>
                                    <div className={styles.cContainer}>
                                        <h2>{it.main}</h2>
                                        <h3>{it.sub}</h3>
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                    </div>

                    <div className={styles.customCard}>
                        <Card className={clsx(styles.card, 'z-10')}>
                            <CardBody className={styles.cBody}>
                                <div className={styles.cContainer}>
                                    <h2>{c3.main}</h2>
                                    <h3>{c3.sub}</h3>
                                </div>
                            </CardBody>
                            <CardFooter className={styles.cFoot}>
                                <p>{c3.header}</p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
