import React from 'react';
import Footer from '@/components/pages/main/footer';
import Header from '@/components/pages/main/header';

import type { ReactNode } from 'react';

type PageLayoutProps = {
    children: ReactNode;
    locale?: string;
    showHeader?: boolean;
    showFooter?: boolean;
};

const PageLayout: React.FC<PageLayoutProps> = ({
    children,
    locale = '',
    showHeader = false,
    showFooter = false,
}) => (
    <>
        {showHeader && <Header locale={locale} />}
        <main>{children}</main>
        {showFooter && <Footer locale={locale} />}
    </>
);

export default PageLayout;
