'use client';

import React from 'react';
import StyledButton from '@/components/pages/styledButton/StyledButton';
import useClientLocale from '@/hooks/useClientLocale';
import { Path } from '@/lib/enums';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/icon/Icons';
import { Link } from '@nextui-org/link';

import styles from './index.module.scss';

export default function Page() {
    const { translations } = useClientLocale();
    const { contacts } = translations;
    const router = useRouter();

    const handleClick = () => {
        return router.push(Path.HOME);
    };

    return (
        <div className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.topContainer}>
                    <h1>{contacts?.label}</h1>
                </div>
                <div className={styles.mainContainer}>
                    <Logo className={styles.logo} />
                    <ul>
                        {contacts &&
                            Object.values(contacts?.contacts).map(
                                ({ fullName, position, email, phone }, idx) => (
                                    <li key={idx}>
                                        <h1>{fullName}</h1>
                                        <h2>{position}</h2>
                                        <Link isExternal href={email}>
                                            {email.split(':')[1]}
                                        </Link>
                                        <Link isExternal href={phone}>
                                            {phone.split(':')[1]}
                                        </Link>
                                    </li>
                                )
                            )}
                    </ul>
                </div>
                <div className={styles.bottomContainer}>
                    <StyledButton
                        label={contacts?.button}
                        onClick={handleClick}
                        className={styles.button}
                    />
                </div>
            </div>
        </div>
    );
}
