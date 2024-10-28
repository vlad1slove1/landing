'use client';

import React, { ReactNode } from 'react';
import useIsAuthPage from '@/hooks/useIsAuthPage';

type Props = {
    children: ReactNode;
};

const MainContainer: React.FC<Props> = ({ children }) => {
    const isAuthPage = useIsAuthPage();
    return isAuthPage ? children : renderMainContainer(children);
};

const renderMainContainer = (children: ReactNode) => (
    <main className="container mx-auto max-w-7xl my-14 pt-8 px-6 flex-grow">{children}</main>
);

export default MainContainer;
