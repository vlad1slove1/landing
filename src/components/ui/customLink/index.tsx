'use client';

import React from 'react';
import { HEADER_HEIGHT } from '@/lib/constants';
import { Link } from '@nextui-org/link';
import useScrollTo from '@/hooks/useScrollTo';

import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    href?: string;
    scrollId?: string;
    offset?: number;
    className?: string;
    isExternal?: boolean;
};

const CustomLink: React.FC<Props> = ({
    children,
    href,
    scrollId,
    offset = HEADER_HEIGHT,
    className,
    isExternal = false,
}) => {
    const scrollTo = useScrollTo();

    const handleClick = (e: React.MouseEvent) => {
        if (scrollId) {
            e.preventDefault();
            scrollTo(scrollId, offset);
        } else if (href && href === '#') {
            e.preventDefault();
            scrollTo(0, offset);
        }
    };

    const linkProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <Link href={href || undefined} onClick={handleClick} className={className} {...linkProps}>
            {children}
        </Link>
    );
};

export default CustomLink;
