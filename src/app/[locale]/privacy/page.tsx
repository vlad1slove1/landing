import PageLayout from '@/components/PageLayout';
import PolicyPage from '@/components/pages/policy';

export default function Page() {
    return (
        <PageLayout showHeader={false} showFooter={false}>
            <PolicyPage />
        </PageLayout>
    );
}
