import React from 'react';
import getLocale from '@/app/[locale]/getLocale';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { ElementId } from '@/lib/enums';
import StyledButtonWrapper from '@/components/ui/styledButton/StyledButtonWrapper';
import { HEADER_HEIGHT } from '@/lib/constants';

import type { LangParams } from '@/app/[locale]/layout';

import styles from './index.module.scss';

type Solution = {
    header: string;
    main: string;
    sub: string;
};

export default async function SolutionsSection({ locale }: LangParams) {
    const t = await getLocale(locale);
    const { label, description, motivation, solutions } = t.sections.solutions;

    return (
        <div className={styles.bg}>
            <div id={ElementId.SOLUTIONS_SECTION} className={styles.container}>
                <div className={styles.topContent}>
                    <ul>
                        <li>{label}</li>
                    </ul>
                    <h1>{description}</h1>
                </div>

                <div className={styles.cards}>
                    {Object.values(solutions).map((solution) =>
                        renderSolution(solution as unknown as Solution)
                    )}
                </div>

                <div className={styles.bottomContent}>
                    <h1>{motivation}</h1>

                    <StyledButtonWrapper
                        label={t.sections.general.button}
                        className={styles.button}
                        scrollTo={ElementId.FORM_SECTION}
                        scrollOffset={HEADER_HEIGHT}
                    />
                </div>
            </div>
        </div>
    );
}

const renderSolution = async (solution: Solution) => {
    const { header, main, sub } = solution;

    return (
        <Card radius="lg" className={styles.card}>
            <CardHeader className={styles.cardHeader}>
                <h1>{header}</h1>
            </CardHeader>
            <CardBody className={styles.cardBody}>
                <p>{main}</p>
            </CardBody>
            <CardFooter className={styles.cardFooter}>
                <p>{sub}</p>
            </CardFooter>
        </Card>
    );
};
