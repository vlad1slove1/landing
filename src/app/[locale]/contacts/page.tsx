import PageLayout from '@/components/PageLayout';
import ContactsPage from '@/components/pages/contacts';

export default function Page() {
    return (
        <PageLayout showHeader={false} showFooter={false}>
            <ContactsPage />
        </PageLayout>
    );
}
