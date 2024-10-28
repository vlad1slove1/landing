import { useState, useEffect } from 'react';

const useDeviceWidth = (breakpoint: number): boolean => {
    const [width, setWidth] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth < breakpoint);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return width;
};

export default useDeviceWidth;
