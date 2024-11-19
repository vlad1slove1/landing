import IconAnimationWrapper from '@/components/icon/IconAnimationWrapper';
import React from 'react';
import { commonIcon } from '@/components/icon/Icons';
import clsx from 'clsx';

import styles from './MobileMenuToggle.module.scss';

type Props = {
    isOpen: boolean;
    handleToggle: () => void;
    size?: number;
    className?: string;
};

const icons = {
    menu: commonIcon['menu'],
    close: commonIcon['close'],
};

const MobileMenuToggle: React.FC<Props> = ({ isOpen, handleToggle, size = 24, className }) => {
    return (
        <button onClick={handleToggle} className={clsx(styles.button, className)}>
            <div className={styles.iconWrapper}>
                <IconAnimationWrapper
                    isToggled={isOpen}
                    componentName="mobile_menu"
                    startIcon={<icons.menu size={size} color={'white'} />}
                    finishIcon={<icons.close size={size} color={'white'} />}
                />
            </div>
        </button>
    );
};

export default MobileMenuToggle;
