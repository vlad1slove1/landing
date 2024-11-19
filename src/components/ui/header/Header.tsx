'use client';

import React from 'react';
import Navbar from '@/components/ui/header/navbar/Navbar';
import LanguageSelector from '@/components/ui/header/langSwitch/LanguageSelector';
import MobileMenu from '@/components/mobile/mobileMenu/MobileMenu';
import siteConfig from '@/config/siteConfig';
import { MOBILE_WIDTH_BREAKPOINT } from '@/lib/constants';
import useDeviceWidth from '@/hooks/useDeviceWidth';
import { Logo } from '@/components/icon/Icons';
import { Link } from '@nextui-org/link';

import type { LangParams } from '@/app/[lang]/layout';

import styles from './Header.module.scss';

const Header: React.FC<LangParams> = ({ lang }) => {
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
                            <LanguageSelector lang={lang} />
                            <MobileMenu items={siteConfig.header.navItems} lang={lang} />
                        </div>
                    </>
                ) : (
                    <>
                        <Navbar lang={lang} />
                        <LanguageSelector lang={lang} />
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
