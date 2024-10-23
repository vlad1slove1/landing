'use client';

import Navbar from '@/components/nav/Navbar';
import useScroll from '@/hooks/useScroll';
import clsx from 'clsx';
import React from 'react';

const Header: React.FC = () => {
    const scrolled = useScroll();

    return (
        <header
            className={clsx('fixed w-full top-0', scrolled ? 'bg-background' : 'bg-transparent')}
        >
            <Navbar />
        </header>
    );
};

export default Header;
