import React, { useState } from 'react';
import MobileMenuToggle from '../mobileMenuToggle/MobileMenuToggle';
import { NavItem } from '@/types/navItem';
import { Link } from '@nextui-org/link';
import { AnimatePresence, motion } from 'framer-motion';
import { MOBILE_WIDTH_BREAKPOINT } from '@/lib/constants';
import { Path } from '@/lib/enums';
import useClientLocale from '@/hooks/useClientLocale';

import useDeviceWidth from '@/hooks/useDeviceWidth';

import styles from './MobileMenu.module.scss';

type Props = {
    items: NavItem[];
};

const MobileMenu: React.FC<Props> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useDeviceWidth(MOBILE_WIDTH_BREAKPOINT);
    const { translations } = useClientLocale();

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
                                {items.map(({ key }, idx) => (
                                    <div key={`navItem_${key}_${idx}`}>
                                        <Link
                                            href={`${Path.HOME}#${key}`}
                                            onClick={() => setIsOpen(false)}
                                            className={styles.mobileNavLink}
                                        >
                                            {translations.header?.navbar[key]}
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
