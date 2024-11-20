import React from 'react';
import Image from 'next/image';
import arrowRight from '@/public/arrow-right.svg';
import clsx from 'clsx';

import styles from './StyledButton.module.scss';

type Props = {
    label: string;
    className?: string;
    onClick?: () => void;
};

const StyledButton: React.FC<Props> = ({ label, onClick, className }) => {
    return (
        <button className={clsx(styles.styledButton, className)} onClick={onClick}>
            <div className={styles.iconWrapper}>
                <span>
                    <Image src={arrowRight} alt="Arrow right" priority={false} />
                </span>
            </div>
            <span className={styles.label}>{label}</span>
        </button>
    );
};

export default StyledButton;
