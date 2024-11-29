'use client';

import { useCallback } from 'react';

const isBrowser = () => typeof window !== 'undefined';

const useScrollTo = () => {
    return useCallback((target: string | number, offset: number = 0) => {
        if (!isBrowser()) return;

        if (typeof target === 'string') {
            const element = document.getElementById(target);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: target - offset, behavior: 'smooth' });
        }
    }, []);
};

export default useScrollTo;
