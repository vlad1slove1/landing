import PageLayout from '@/components/PageLayout';
import PolicyPage from '@/components/pages/policy';

import type { LangParams } from '@/app/[locale]/layout';

export default function Page({ params }: { params: LangParams }) {
    return (
        <PageLayout locale={params.locale} showHeader={false} showFooter={false}>
            <PolicyPage />
        </PageLayout>
    );
}
