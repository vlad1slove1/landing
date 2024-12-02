import React from 'react';
import Image from 'next/image';
import arrowRight from '@/public/arrow-right.svg';
import clsx from 'clsx';

import styles from './index.module.scss';

export type StyledButtonProps = {
    label: string;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: () => void;
};

export default function StyledButton({
    label,
    type = 'button',
    onClick,
    className,
}: StyledButtonProps) {
    return (
        <button type={type} onClick={onClick} className={clsx(styles.styledButton, className)}>
            <div className={styles.iconWrapper}>
                <span>
                    <Image src={arrowRight} alt="Arrow right" priority={false} />
                </span>
            </div>
            <span className={styles.label}>{label}</span>
        </button>
    );
}
