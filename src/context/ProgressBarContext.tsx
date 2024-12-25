import React, { createContext, ReactNode } from 'react';
import useProgress from '@/hooks/useProgress';
import { AnimatePresence, motion, useMotionTemplate } from 'framer-motion';

type ProgressBarProps = {
    className: string;
    children: ReactNode;
};

const ProgressBarContext = createContext<ReturnType<typeof useProgress> | null>(null);

const ProgressBar: React.FC<ProgressBarProps> = ({ className, children }) => {
    const progress = useProgress();
    const width = useMotionTemplate`${progress.value}%`;

    return (
        <ProgressBarContext.Provider value={progress}>
            <AnimatePresence onExitComplete={progress.reset}>
                {progress.state !== 'complete' && (
                    <motion.div style={{ width }} exit={{ opacity: 0 }} className={className} />
                )}
            </AnimatePresence>

            {children}
        </ProgressBarContext.Provider>
    );
};

export { ProgressBarContext, ProgressBar };
