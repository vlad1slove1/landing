import React from 'react';
import PageLayout from '@/components/PageLayout';
import AboutSection from '@/components/pages/main/sections/about/AboutSection';
import FormSection from '@/components/pages/main/sections/form/FormSection';
import GeneralSection from '@/components/pages/main/sections/general/GeneralSection';
import InfoSection from '@/components/pages/main/sections/info/InfoSection';
import ModularSection from '@/components/pages/main/sections/modular/ModularSection';
import ProductsSection from '@/components/pages/main/sections/products/ProductsSection';
import ServicesSection from '@/components/pages/main/sections/services/ServicesSection';
import SolutionsSection from '@/components/pages/main/sections/solutions/SolutionsSection';

import type { LangParams } from '@/app/[locale]/layout';

export default function ({ params }: { params: LangParams }) {
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
