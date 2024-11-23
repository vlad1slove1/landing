import React from 'react';
import { navItems } from '@/config/config';
import { Link } from '@nextui-org/link';
import { Path } from '@/lib/enums';
import useClientLocale from '@/hooks/useClientLocale';

import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
    const { translations } = useClientLocale();
    return (
        <div className={styles.navbar}>
            {navItems.map(({ key }, idx) => (
                <Link
                    key={`navItem_${key}_${idx}`}
                    href={`${Path.HOME}#${key}`}
                    className={styles.link}
                >
                    {translations.header?.navbar[key]}
                </Link>
            ))}
        </div>
    );
};

export default Navbar;
