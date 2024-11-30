import MainPage from '@/components/pages/main';

import type { LangParams } from '@/app/[locale]/layout';

export default function Home({ params }: { params: LangParams }) {
    return <MainPage params={params} />;
}
