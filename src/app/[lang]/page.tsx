import React from 'react';
import GeneralSection from '@/components/ui/sections/general/GeneralSection';

import type { LangParams } from '@/app/[lang]/layout';

export default function Home({ params }: { params: LangParams }) {
    return (
        <>
            <GeneralSection lang={params.lang} />
            <div>content</div>
        </>
    );
}
