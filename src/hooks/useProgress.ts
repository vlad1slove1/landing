import { useEffect, useRef, useState } from 'react';
import { useSpring } from 'framer-motion';
import util from '@/util';

const useProgress = () => {
    const [state, setState] = useState<'initial' | 'in-progress' | 'completing' | 'complete'>(
        'initial'
    );

    const value = useSpring(0, {
        damping: 25,
        mass: 0.5,
        stiffness: 300,
        restDelta: 0.1,
    });

    useInterval(
        () => {
            if (value.get() === 100) {
                value.jump(0);
            }

            const current = value.get();

            let diff;
            if (current === 0) {
                diff = 15;
            } else if (current < 50) {
                diff = util.randomNumber(1, 10);
            } else {
                diff = util.randomNumber(1, 5);
            }

            value.set(Math.min(current + diff, 99));
        },
        state === 'in-progress' ? 750 : null
    );

    useEffect(() => {
        if (state === 'initial') {
            value.jump(0);
        } else if (state === 'completing') {
            value.set(100);
        }

        return value.on('change', (latest) => {
            if (latest === 100) {
                setState('complete');
            }
        });
    }, [value, state]);

    function reset() {
        setState('initial');
    }

    function start() {
        setState('in-progress');
    }

    function done() {
        setState((state) =>
            state === 'initial' || state === 'in-progress' ? 'completing' : state
        );
    }

    return { state, value, start, done, reset };
};

const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            tick();

            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

export default useProgress;
