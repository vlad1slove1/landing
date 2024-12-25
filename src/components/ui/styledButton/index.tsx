import React from 'react';
import Image from 'next/image';
import arrowRight from '@/public/arrow-right.svg';
import clsx from 'clsx';
import CustomLink from '@/components/ui/customLink';

import styles from './index.module.scss';

export type StyledButtonProps = {
    label: string;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: () => void;
    href?: string;
    scrollId?: string;
    offset?: number;
};

const StyledButton: React.FC<StyledButtonProps> = ({
    label,
    type = 'button',
    onClick,
    className,
    href,
    scrollId,
    offset = 0,
}) => {
    const buttonContent = (
        <>
            <div className={styles.iconWrapper}>
                <span>
                    <Image src={arrowRight} alt="Arrow right" priority={false} />
                </span>
            </div>
            <span className={styles.label}>{label}</span>
        </>
    );

    if (href) {
        return (
            <CustomLink
                href={href}
                scrollId={scrollId}
                offset={offset}
                className={clsx(styles.styledButton, className)}
            >
                {buttonContent}
            </CustomLink>
        );
    }

    return (
        <button type={type} onClick={onClick} className={clsx(styles.styledButton, className)}>
            {buttonContent}
        </button>
    );
};

export default StyledButton;
