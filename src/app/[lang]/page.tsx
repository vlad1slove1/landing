import InfoSection from '@/components/ui/sections/info/InfoSection';
import React from 'react';
import GeneralSection from '@/components/ui/sections/general/GeneralSection';
import AboutSection from '@/components/ui/sections/about/AboutSection';
import ServicesSection from '@/components/ui/sections/services/ServicesSection';
import ProductsSection from '@/components/ui/sections/products/ProductsSection';

import type { LangParams } from '@/app/[lang]/layout';

export default function Home({ params }: { params: LangParams }) {
    return (
        <>
            <GeneralSection lang={params.lang} />
            <AboutSection lang={params.lang} />
            <ServicesSection lang={params.lang} />
            <ProductsSection lang={params.lang} />
            <InfoSection lang={params.lang} />
        </>
    );
}
