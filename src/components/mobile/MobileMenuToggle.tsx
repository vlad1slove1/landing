import IconAnimationWrapper from '@/components/IconAnimationWrapper';
import React from 'react';
import { commonIcon } from '@/components/Icons';
import clsx from 'clsx';

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
        <button onClick={handleToggle} className={clsx('focus:outline-none', className)}>
            <div className="w-auto h-auto bg-transparent rounded-lg flex items-center justify-center pt-px px-0 mx-0">
                <IconAnimationWrapper
                    isToggled={isOpen}
                    componentName="mobile_menu"
                    startIcon={<icons.menu size={size} />}
                    finishIcon={<icons.close size={size} />}
                />
            </div>
        </button>
    );
};

export default MobileMenuToggle;
