import PageLayout from '@/components/PageLayout';
import ContactsPage from '@/components/pages/contacts';

import type { LangParams } from '@/app/[locale]/layout';

export default function Page({ params }: { params: LangParams }) {
    return (
        <PageLayout locale={params.locale} showHeader={false} showFooter={false}>
            <ContactsPage />
        </PageLayout>
    );
}
