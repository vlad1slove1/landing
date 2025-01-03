'use client';

import React from 'react';
import StyledButton from '@/components/ui/styledButton';
import useScrollTo from '@/hooks/useScrollTo';
import { useRouter } from 'next/navigation';

import type { StyledButtonProps } from '@/components/ui/styledButton/index';

type Props = StyledButtonProps & {
    scrollTo?: string;
    scrollOffset?: number;
    redirectTo?: string;
};

const StyledButtonWrapper: React.FC<Props> = ({
    label,
    type,
    className,
    scrollTo,
    scrollOffset = 0,
    redirectTo,
}) => {
    const scroll = useScrollTo();
    const router = useRouter();

    const handleClick = () => {
        return redirectTo ? router.push(redirectTo) : scroll(scrollTo!, scrollOffset);
    };

    return <StyledButton label={label} className={className} type={type} onClick={handleClick} />;
};

export default StyledButtonWrapper;
