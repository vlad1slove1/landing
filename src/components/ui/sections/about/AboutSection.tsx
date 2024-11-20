import React from 'react';
import getLocale from '@/app/[lang]/locales';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import clsx from 'clsx';

import type { LangParams } from '@/app/[lang]/layout';

import styles from './AboutSection.module.scss';

const AboutSection: React.FC<LangParams> = async ({ lang }) => {
    const t = await getLocale(lang);
    return (
        <div className={styles.bg}>
            <div className={styles.section}>
                <div className={styles.topContent}>
                    <h1>{t?.sections.about.h1}</h1>
                </div>
                <div className={styles.cards}>
                    <div className="flex flex-col gap-4 lg:gap-0 md:gap-0 lg:flex-row md:flex-row justify-between w-full">
                        <Card className={styles.card}>
                            <CardHeader className={styles.cHead}>
                                <p>{t.sections.about.cards.c1hdr}</p>
                            </CardHeader>
                            <CardBody className={styles.cBody}>
                                <div className={styles.cContainer}>
                                    <h2>{t.sections.about.cards.c1bdy}</h2>
                                    <h3>{t.sections.about.cards.c1sub}</h3>
                                </div>
                            </CardBody>
                        </Card>

                        <Card className={clsx(styles.card, 'z-10')}>
                            <CardHeader className={styles.cHead}>
                                <p>{t.sections.about.cards.c2hdr}</p>
                            </CardHeader>
                            <CardBody className={styles.cBody}>
                                <div className={styles.cContainer}>
                                    <h2>{t.sections.about.cards.c2bdy}</h2>
                                    <h3>{t.sections.about.cards.c2sub}</h3>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    <div className={styles.customCard}>
                        <Card className={clsx(styles.card, 'z-10')}>
                            <CardBody className={styles.cBody}>
                                <div className={styles.cContainer}>
                                    <h2>{t.sections.about.cards.c3bdy}</h2>
                                    <h3>{t.sections.about.cards.c3sub}</h3>
                                </div>
                            </CardBody>
                            <CardFooter className={styles.cFoot}>
                                <p>{t.sections.about.cards.c3hdr}</p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
