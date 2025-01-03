'use client';

import React from 'react';
import { Path } from '@/lib/enums';
import useClientLocale from '@/hooks/useClientLocale';
import Image from 'next/image';
import errorBg from '@/public/error-bg.svg';
import StyledButton from '@/components/ui/styledButton';

import styles from './index.module.scss';

export default function Page() {
    const { translations } = useClientLocale();
    const { notFound } = translations;

    return (
        <div className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.topContainer}>
                    <Image src={errorBg} alt="Error background" />
                    <h1>{notFound?.title}</h1>
                </div>
                <div className={styles.descriptionContainer}>
                    <h3>{notFound?.label}</h3>
                    <p>{notFound?.description}</p>
                    <StyledButton label={notFound?.button} href={Path.HOME} />
                </div>
            </div>
        </div>
    );
}
