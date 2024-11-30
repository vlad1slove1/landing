'use client';

import React from 'react';
import { Link } from '@nextui-org/link';
import useClientLocale from '@/hooks/useClientLocale';
import useScrollTo from '@/hooks/useScrollTo';
import { HEADER_HEIGHT } from '@/lib/constants';

import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
    const { translations } = useClientLocale();
    const { navbar } = translations.header ?? {};
    const scrollTo = useScrollTo();

    return (
        <div className={styles.navbar}>
            {navbar &&
                Object.values(navbar).map(({ label, scrollId, href }, idx) => (
                    <Link
                        key={idx}
                        href={href ? href : undefined}
                        onClick={() => (scrollId ? scrollTo(scrollId, HEADER_HEIGHT) : null)}
                        className={styles.link}
                    >
                        {label}
                    </Link>
                ))}
        </div>
    );
};

export default Navbar;
