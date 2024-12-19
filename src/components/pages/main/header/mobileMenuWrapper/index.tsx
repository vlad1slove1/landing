import LanguageSelector from '@/components/pages/main/header/languageSelector';
import React from 'react';
import CustomLink from '@/components/ui/customLink';
import { Logo } from '@/components/icon/Icons';
import MobileMenu from '@/components/mobile/mobileMenu/MobileMenu';

import styles from './indes.module.scss';

export default function MobileMenuWrapper() {
    return (
        <div className={styles.main}>
            <CustomLink href="#">
                <Logo className={styles.logo} />
            </CustomLink>
            <div className={styles.container}>
                <LanguageSelector />
                <MobileMenu />
            </div>
        </div>
    );
}
