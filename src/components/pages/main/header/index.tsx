import React from 'react';
import Navbar from '@/components/pages/main/header/navbar';
import clsx from 'clsx';
import MobileMenuWrapper from '@/components/pages/main/header/mobileMenuWrapper';

import styles from './index.module.scss';

export default function Header({ locale }: { locale: string }) {
    return (
        <header className={clsx(styles.header, 'header')}>
            <div className={styles.container}>
                <div className={styles.items}>
                    <Navbar locale={locale} />
                    <MobileMenuWrapper />
                </div>
            </div>
        </header>
    );
}
