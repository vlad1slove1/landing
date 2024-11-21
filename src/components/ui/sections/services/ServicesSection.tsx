import React from 'react';
import getLocale from '@/app/[lang]/locales';
import Image from 'next/image';

import type { LangParams } from '@/app/[lang]/layout';

import styles from './ServicesSection.module.scss';
import StyledButton from '@/components/ui/styledButton/StyledButton';

type Service = {
    label: string;
    [key: string]: string;
};

const ServicesSection: React.FC<LangParams> = async ({ lang }) => {
    const t = await getLocale(lang);
    const services = Object.entries(t?.sections.services ?? {});
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <tbody>
                    {services.map(([key, service]) => renderService(key, service as Service))}
                </tbody>
            </table>
            <StyledButton label={t.sections.general.button} className={styles.button} />
        </div>
    );
};

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

export default ServicesSection;
