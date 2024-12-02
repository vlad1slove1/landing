import React from 'react';
import Footer from '@/components/pages/main/footer';
import Header from '@/components/pages/main/header';

import type { ReactNode } from 'react';

type PageLayoutProps = {
    children: ReactNode;
    showHeader?: boolean;
    showFooter?: boolean;
};

const PageLayout: React.FC<PageLayoutProps> = ({
    children,
    showHeader = false,
    showFooter = false,
}) => (
    <>
        {showHeader && <Header />}
        <main>{children}</main>
        {showFooter && <Footer />}
    </>
);

export default PageLayout;
