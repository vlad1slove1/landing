import { Link } from '@nextui-org/link';
import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { IconSVGProps } from '@/types/iconSVGProps';

const util = {
    createIcon: (
        paths: ReactNode,
        viewBox: string = '0 0 24 24',
        defaultSize: number = 24,
        className?: string
    ): React.FC<IconSVGProps> => {
        return ({
            size = defaultSize,
            color = 'currentColor',
            fill = 'none',
            width,
            height,
            href,
            className: additionalClassName,
            ...props
        }) => {
            const svgElement = (
                <svg
                    width={size || width || defaultSize}
                    height={size || height || defaultSize}
                    viewBox={viewBox}
                    fill={fill}
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={clsx(className, additionalClassName)}
                    {...props}
                >
                    {paths}
                </svg>
            );

            return href ? (
                <Link isExternal href={href} className="static">
                    {svgElement}
                </Link>
            ) : (
                svgElement
            );
        };
    },
};

export default util;
