import React from 'react';
import PageLayout from '@/components/PageLayout';
import AboutSection from '@/components/pages/main/sections/about';
import FormSection from '@/components/pages/main/sections/form';
import GeneralSection from '@/components/pages/main/sections/general';
import InfoSection from '@/components/pages/main/sections/info';
import ModularSection from '@/components/pages/main/sections/modular';
import ProductsSection from '@/components/pages/main/sections/products';
import ServicesSection from '@/components/pages/main/sections/services';
import SolutionsSection from '@/components/pages/main/sections/solutions';

import type { LangParams } from '@/app/[locale]/layout';

export default function Page({ params }: { params: LangParams }) {
    return (
        <PageLayout showHeader showFooter>
            <GeneralSection locale={params.locale} />
            <AboutSection locale={params.locale} />
            <ServicesSection locale={params.locale} />
            <ProductsSection locale={params.locale} />
            <InfoSection locale={params.locale} />
            <SolutionsSection locale={params.locale} />
            <ModularSection locale={params.locale} />
            <FormSection locale={params.locale} />
        </PageLayout>
    );
}
