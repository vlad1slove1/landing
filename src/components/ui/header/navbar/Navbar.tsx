import React from 'react';
import siteConfig from '@/config/siteConfig';
import { Link } from '@nextui-org/link';
import { Path } from '@/lib/enums';
import useLocale from '@/hooks/useLocale';

import type { LangParams } from '@/app/[lang]/layout';

import styles from './Navbar.module.scss';

const Navbar: React.FC<LangParams> = ({ lang }) => {
    const t = useLocale(lang);
    return (
        <div className={styles.navbar}>
            {siteConfig.header.navItems.map(({ key }, idx) => (
                <Link
                    key={`navItem_${key}_${idx}`}
                    href={`${Path.HOME}#${key}`}
                    className={styles.link}
                >
                    {t?.header.navbar[key]}
                </Link>
            ))}
        </div>
    );
};

export default Navbar;
