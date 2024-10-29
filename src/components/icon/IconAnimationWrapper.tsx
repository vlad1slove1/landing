import React, { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type AnimatedToggleIconProps = {
    isToggled: boolean;
    startIcon: ReactNode;
    finishIcon: ReactNode;
    componentName: string;
    duration?: number;
};

const IconAnimationWrapper: React.FC<AnimatedToggleIconProps> = ({
    isToggled,
    startIcon,
    finishIcon,
    componentName,
    duration = 0.15,
}) => {
    return (
        <AnimatePresence mode="wait" initial={false}>
            {!isToggled ? (
                <motion.div
                    key={`${componentName}-start-icon`}
                    initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
                    transition={{ duration }}
                >
                    {startIcon}
                </motion.div>
            ) : (
                <motion.div
                    key={`${componentName}-finish-icon`}
                    initial={{ opacity: 0, scale: 0.8, rotate: 180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: -180 }}
                    transition={{ duration }}
                >
                    {finishIcon}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IconAnimationWrapper;
