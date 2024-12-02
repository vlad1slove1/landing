'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Progress } from '@nextui-org/react';
import styles from './index.module.scss';

const PROGRESS_CONFIG = {
    maxProgress: 90,
    incrementInterval: 200,
    completionDelay: 300,
    simulationDelay: 500,
};

export default function TopProgressBar() {
    const [progress, setProgress] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    const startProgress = useCallback(() => {
        setProgress(0);
        setIsAnimating(true);

        const interval = setInterval(() => {
            setProgress((prev) => Math.min(prev + Math.random() * 10, PROGRESS_CONFIG.maxProgress));
        }, PROGRESS_CONFIG.incrementInterval);

        return () => clearInterval(interval);
    }, []);

    const completeProgress = useCallback(() => {
        if (!isAnimating) return;

        setTimeout(() => {
            setProgress(100);
            setTimeout(() => {
                setIsAnimating(false);
                setProgress(0);
            }, PROGRESS_CONFIG.completionDelay);
        }, PROGRESS_CONFIG.simulationDelay);
    }, [isAnimating]);

    useEffect(() => {
        startProgress();
    }, [startProgress]);

    useEffect(() => {
        completeProgress();
    }, [isAnimating, completeProgress]);

    return isAnimating ? (
        <Progress value={progress} color="primary" className={styles.progressBar} />
    ) : null;
}
