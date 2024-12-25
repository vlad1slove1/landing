'use client';

import React, { ComponentProps, startTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Link } from '@nextui-org/link';
import useScrollTo from '@/hooks/useScrollTo';
import useProgressBar from '@/hooks/useProgressBar';

type CustomLinkProps = ComponentProps<typeof Link> & {
    scrollId?: string;
    offset?: number;
};

const CustomLink: React.FC<CustomLinkProps> = ({
    href = '#',
    scrollId,
    offset = 0,
    children,
    ...rest
}) => {
    const progress = useProgressBar();
    const router = useRouter();
    const scrollTo = useScrollTo();

    const handleCLick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        if (scrollId) {
            scrollTo(scrollId, offset);
        } else if (href && href === '#') {
            scrollTo(0, offset);
        } else {
            progress.start();

            startTransition(() => {
                router.push(href!.toString());
                progress.done();
            });
        }
    };

    return (
        <Link href={href} onClick={handleCLick} {...rest}>
            {children}
        </Link>
    );
};

export default CustomLink;
