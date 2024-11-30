import React, { useState } from 'react';
import MobileMenuToggle from '../mobileMenuToggle/MobileMenuToggle';
import { Link } from '@nextui-org/link';
import { AnimatePresence, motion } from 'framer-motion';
import { HEADER_HEIGHT, MOBILE_WIDTH_BREAKPOINT } from '@/lib/constants';
import useClientLocale from '@/hooks/useClientLocale';
import useScrollTo from '@/hooks/useScrollTo';

import useDeviceWidth from '@/hooks/useDeviceWidth';

import styles from './MobileMenu.module.scss';

const MobileMenu: React.FC = () => {
    const { translations } = useClientLocale();
    const { navbar } = translations.header ?? {};
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useDeviceWidth(MOBILE_WIDTH_BREAKPOINT);
    const scrollTo = useScrollTo();

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.mobileMenu}>
            <MobileMenuToggle isOpen={isOpen} handleToggle={handleOpenMenu} />

            {isMobile && (
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className={styles.mobileMenuOverlay}
                        >
                            <nav className={styles.mobileNav}>
                                {navbar &&
                                    Object.values(navbar).map(({ label, scrollId, href }, idx) => (
                                        <div key={idx}>
                                            <Link
                                                key={idx}
                                                href={href ? href : undefined}
                                                onClick={() => {
                                                    setIsOpen(false);
                                                    scrollId
                                                        ? scrollTo(scrollId, HEADER_HEIGHT)
                                                        : null;
                                                }}
                                                className={styles.mobileNavLink}
                                            >
                                                {label}
                                            </Link>
                                        </div>
                                    ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </div>
    );
};

export default MobileMenu;
