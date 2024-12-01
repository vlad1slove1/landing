'use client';

import React from 'react';
import useClientLocale from '@/hooks/useClientLocale';
import { HEADER_HEIGHT } from '@/lib/constants';
import { Path } from '@/lib/enums';
import { Divider } from '@nextui-org/divider';
import { Link } from '@nextui-org/link';
import Image from 'next/image';
import arrowTop from '@/public/arrow-top.svg';
import useScrollTo from '@/hooks/useScrollTo';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    const { translations } = useClientLocale();
    const { requisites, contacts, links } = translations.footer ?? {};
    const { form } = translations?.sections ?? {};
    const scrollTo = useScrollTo();

    return (
        <footer>
            <div className={styles.bg}>
                <div className={styles.container}>
                    <div className={styles.requisitesContainer}>
                        <ul>
                            {requisites &&
                                Object.entries(requisites).map(([key, value]) => (
                                    <li key={key}>{value}</li>
                                ))}
                        </ul>
                        <br />
                        <ul>
                            {contacts &&
                                Object.values(contacts).map(({ label, href, text }, idx) => (
                                    <li key={idx}>
                                        {label}:&nbsp;
                                        <Link href={href} isExternal>
                                            {text ? text : href}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <Divider />
                    <div className={styles.linksContainer}>
                        <ul>
                            {links &&
                                Object.values(links).map(({ label, href, scrollId }, idx) => (
                                    <li key={idx} className="cursor-pointer">
                                        <Link
                                            href={href ? href : undefined}
                                            onClick={() =>
                                                scrollId ? scrollTo(scrollId, HEADER_HEIGHT) : null
                                            }
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <Divider />

                    <div className={styles.policyContainer}>
                        <Link href={Path.PRIVACY}>{form?.privacyPolicy}</Link>

                        <Link onClick={() => scrollTo(0)} className="cursor-pointer">
                            <Image src={arrowTop} alt="Arrow-top" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
