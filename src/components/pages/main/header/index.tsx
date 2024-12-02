'use client';

import useScrollTo from '@/hooks/useScrollTo';
import React from 'react';
import Navbar from '@/components/pages/main/header/navbar';
import LanguageSelector from '@/components/pages/main/header/languageSelector';
import MobileMenu from '@/components/mobile/mobileMenu/MobileMenu';
import { MOBILE_WIDTH_BREAKPOINT } from '@/lib/constants';
import useDeviceWidth from '@/hooks/useDeviceWidth';
import { Logo } from '@/components/icon/Icons';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';

import styles from './index.module.scss';

export default function Header() {
    const isMobile = useDeviceWidth(MOBILE_WIDTH_BREAKPOINT);
    const scrollTo = useScrollTo();

    const handleClick = () => {
        return scrollTo(0);
    };

    return (
        <header className={clsx(styles.header, 'header')}>
            <div className={styles.container}>
                {isMobile ? (
                    <>
                        <Link onClick={handleClick}>
                            <Logo className={styles.logo} />
                        </Link>
                        <div className={styles.container}>
                            <LanguageSelector />
                            <MobileMenu />
                        </div>
                    </>
                ) : (
                    <>
                        <Navbar />
                        <LanguageSelector />
                    </>
                )}
            </div>
        </header>
    );
}
