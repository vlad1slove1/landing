'use client';

import { usePathname } from 'next/navigation';
import { Path } from '@/lib/enums';

const useIsAuthPage = (): boolean => {
    const pathname: string = usePathname();
    const authPages = [Path.ADMIN, Path.LOGIN] as string[];
    return authPages.includes(pathname);
};

export default useIsAuthPage;
