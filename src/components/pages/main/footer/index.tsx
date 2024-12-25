import React from 'react';
import getLocale from '@/app/[locale]/getLocale';
import CustomLink from '@/components/ui/customLink';
import { Path } from '@/lib/enums';
import { Divider } from '@nextui-org/divider';
import Image from 'next/image';
import arrowTop from '@/public/arrow-top.svg';
import { HEADER_HEIGHT } from '@/lib/constants';

import styles from './index.module.scss';

export default async function Footer({ locale }: { locale: string }) {
    const t = await getLocale(locale);
    const { requisites, contacts, links } = t.footer;
    const { form } = t.sections;

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
                                        <CustomLink href={href} isExternal>
                                            {text ? text : href}
                                        </CustomLink>
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
                                        <CustomLink
                                            href={href || '#'}
                                            scrollId={scrollId}
                                            offset={HEADER_HEIGHT}
                                            className={styles.link}
                                        >
                                            {label}
                                        </CustomLink>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <Divider />

                    <div className={styles.policyContainer}>
                        <CustomLink href={Path.PRIVACY}>{form?.privacyPolicy}</CustomLink>

                        <CustomLink href="#" className="cursor-pointer" scrollId={undefined}>
                            <Image src={arrowTop} alt="Arrow-top" />
                        </CustomLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}
