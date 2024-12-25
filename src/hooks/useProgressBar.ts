import { useContext } from 'react';
import { ProgressBarContext } from '@/context/ProgressBarContext';

const useProgressBar = () => {
    const progress = useContext(ProgressBarContext);

    if (progress === null) {
        throw new Error('Need to be inside provider');
    }

    return progress;
};

export default useProgressBar;
