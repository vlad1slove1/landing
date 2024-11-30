import PageLayout from '@/components/PageLayout';
import NotFoundPage from '@/components/pages/not-found';

export default function Page() {
    return (
        <PageLayout showHeader={false} showFooter={false}>
            <NotFoundPage />
        </PageLayout>
    );
}
