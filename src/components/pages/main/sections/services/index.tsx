import React from 'react';
import getLocale from '@/app/[locale]/getLocale';
import Image from 'next/image';
import StyledButtonWrapper from '@/components/ui/styledButton/StyledButtonWrapper';
import { ElementId } from '@/lib/enums';
import { HEADER_HEIGHT } from '@/lib/constants';

import type { LangParams } from '@/app/[locale]/layout';

import styles from './index.module.scss';

type Service = {
    label: string;
    [key: string]: string;
};

export default async function ServicesSection({ locale }: LangParams) {
    const t = await getLocale(locale);
    const services = Object.entries(t.sections.services ?? {});

    return (
        <div className={styles.bg}>
            <div id={ElementId.SERVICES_SECTION} className={styles.container}>
                <table className={styles.table}>
                    <tbody>
                        {services.map(([key, service]) =>
                            renderService(key, service as unknown as Service)
                        )}
                    </tbody>
                </table>

                <StyledButtonWrapper
                    label={t.sections.general.button}
                    className={styles.button}
                    scrollTo={ElementId.FORM_SECTION}
                    scrollOffset={HEADER_HEIGHT}
                />
            </div>
        </div>
    );
}

const renderService = async (key: string, service: Service) => {
    const { label, ...listItems } = service;
    const imageSrc = (await import(`@/public/${key}.svg`)).default;

    return (
        <tr key={key}>
            <td>
                {imageSrc && (
                    <Image alt={label} src={imageSrc} priority={false} className={styles.image} />
                )}
            </td>
            <td>{label}</td>
            <td>
                <ul>
                    {Object.values(listItems).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};
