'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { useIsSSR } from '@react-aria/ssr';
import { SwitchProps, useSwitch } from '@nextui-org/switch';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { themeSwitchIcon } from '@/components/Icons';
import IconAnimationWrapper from '@/components/IconAnimationWrapper';
import clsx from 'clsx';

export type Props = {
    size?: number;
    className?: string;
    classNames?: SwitchProps['classNames'];
};

const ThemeSwitch: React.FC<Props> = ({ size = 24, className, classNames }) => {
    const { theme, setTheme } = useTheme();
    const isSSR = useIsSSR();

    const onChange = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    const { Component, slots, getBaseProps, getInputProps, getWrapperProps } = useSwitch({
        'isSelected': theme === 'light' || isSSR,
        'aria-label': `Switch to ${theme === 'light' || isSSR ? 'dark' : 'light'} mode`,
        onChange,
    });

    return (
        <Component
            {...getBaseProps({
                className: clsx(
                    'px-px transition-opacity hover:opacity-80 cursor-pointer',
                    className,
                    classNames?.base
                ),
            })}
        >
            <VisuallyHidden>
                <input {...getInputProps()} />
            </VisuallyHidden>
            <div
                {...getWrapperProps()}
                className={slots.wrapper({
                    class: clsx(
                        [
                            'w-auto h-auto',
                            'bg-transparent',
                            'rounded-lg',
                            'flex items-center justify-center',
                            'group-data-[selected=true]:bg-transparent',
                            '!text-default-500',
                            'pt-px',
                            'px-0',
                            'mx-0',
                        ],
                        classNames?.wrapper
                    ),
                })}
            >
                <IconAnimationWrapper
                    isToggled={theme === 'light' || isSSR}
                    componentName="theme_switch"
                    startIcon={
                        <themeSwitchIcon.sun
                            size={size}
                            className="fill-yellow-300 stroke-yellow-400"
                        />
                    }
                    finishIcon={
                        <themeSwitchIcon.moon
                            size={size}
                            className="fill-gray-100 stroke-gray-400"
                        />
                    }
                />
            </div>
        </Component>
    );
};

export default ThemeSwitch;
