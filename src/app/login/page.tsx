'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Path } from '@/lib/enums';
import useDeviceWidth from '@/hooks/useDeviceWidth';
import { MOBILE_WIDTH_BREAKPOINT } from '@/lib/constants';
import Image from 'next/image';
import loginImage from '@/public/login_image.svg';
import LoginForm from '@/components/LoginForm';

const Page: React.FC = () => {
    const router = useRouter();
    const isMobile = useDeviceWidth(MOBILE_WIDTH_BREAKPOINT);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
            <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
                {!isMobile && (
                    <div className="max-md:mt-8">
                        <Image
                            src={loginImage}
                            alt="Login page image"
                            className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
                            priority
                        />
                    </div>
                )}
                <LoginForm onSuccess={() => router.push(Path.ADMIN)} />
            </div>
        </div>
    );
};

export default Page;
