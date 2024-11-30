import React from 'react';
import getLocale from '@/app/[locale]/getLocale';

import type { LangParams } from '@/app/[locale]/layout';

import styles from './ModularSection.module.scss';

const ModularSection: React.FC<LangParams> = async ({ locale }) => {
    const t = await getLocale(locale);
    const { label, solutions } = t.sections.modular;

    return (
        <div className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.topContent}>
                    <ul>
                        <li>{label}</li>
                    </ul>
                </div>
                <div className={styles.modularWrapper}>
                    <div className={styles.modular}>
                        <div className={styles.solutions}>
                            {Object.entries(solutions).map(([key, solution]) => (
                                <div className={styles.solution} key={key}>
                                    <h2 className={styles.solutionMain}>{solution.main}</h2>
                                    {solution.sub && (
                                        <p className={styles.solutionSub}>{solution.sub}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModularSection;
