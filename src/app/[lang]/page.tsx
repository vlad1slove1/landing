import React from 'react';
import GeneralSection from '@/components/ui/sections/general/GeneralSection';
import AboutSection from '@/components/ui/sections/about/AboutSection';

import type { LangParams } from '@/app/[lang]/layout';

export default function Home({ params }: { params: LangParams }) {
    return (
        <>
            <GeneralSection lang={params.lang} />
            <AboutSection lang={params.lang} />
        </>
    );
}
