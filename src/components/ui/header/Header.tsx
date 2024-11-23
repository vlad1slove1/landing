'use client';

import React from 'react';
import Navbar from '@/components/ui/header/navbar/Navbar';
import LanguageSelector from '@/components/ui/header/languageSelector/LanguageSelector';
import MobileMenu from '@/components/mobile/mobileMenu/MobileMenu';
import { navItems } from '@/config/config';
import { MOBILE_WIDTH_BREAKPOINT } from '@/lib/constants';
import useDeviceWidth from '@/hooks/useDeviceWidth';
import { Logo } from '@/components/icon/Icons';
import { Link } from '@nextui-org/link';

import styles from './Header.module.scss';

const Header: React.FC = () => {
    const isMobile = useDeviceWidth(MOBILE_WIDTH_BREAKPOINT);
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {isMobile ? (
                    <>
                        <Link href="/">
                            <Logo className={styles.logo} />
                        </Link>
                        <div className={styles.container}>
                            <LanguageSelector />
                            <MobileMenu items={navItems} />
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
};

export default Header;
