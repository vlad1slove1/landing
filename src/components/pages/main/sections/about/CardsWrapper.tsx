'use client';

import React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import useDeviceWidth from '@/hooks/useDeviceWidth';
import clsx from 'clsx';
import { MOBILE_WIDTH_BREAKPOINT } from '@/lib/constants';

import styles from './index.module.scss';

type CardData = {
    header: string;
    main: string;
    sub: string;
};

type AboutSectionProps = {
    cards: Record<string, { header: string; main: string; sub: string }>;
};

const AboutSectionClient: React.FC<AboutSectionProps> = ({ cards }) => {
    const isMobile = useDeviceWidth(MOBILE_WIDTH_BREAKPOINT);

    const renderCard = (card: CardData, idx: number) => (
        <Card key={`card_${idx}`} className={styles.card}>
            {!isMobile && (
                <CardHeader className={styles.cHead}>
                    <p>{card.header}</p>
                </CardHeader>
            )}
            <CardBody className={styles.cBody}>
                <div className={styles.cContainer}>
                    <h2>{card.main}</h2>
                    <h3>{card.sub}</h3>
                </div>
            </CardBody>
            {isMobile && (
                <CardFooter className={styles.cFoot}>
                    <p>{card.header}</p>
                </CardFooter>
            )}
        </Card>
    );

    const renderCustomCard = (card: CardData) => (
        <div className={styles.customCard}>
            <Card className={clsx(styles.card, 'z-10')}>
                <CardBody className={styles.cBody}>
                    <div className={styles.cContainer}>
                        <h2>{card.main}</h2>
                        <h3>{card.sub}</h3>
                    </div>
                </CardBody>
                <CardFooter className={styles.cFoot}>
                    <p>{card.header}</p>
                </CardFooter>
            </Card>
        </div>
    );

    return (
        <div className={styles.cards}>
            <div className={styles.firstRow}>
                {[cards.c1, cards.c2].map((card, idx) => renderCard(card, idx))}
            </div>
            {renderCustomCard(cards.c3)}
        </div>
    );
};

export default AboutSectionClient;
