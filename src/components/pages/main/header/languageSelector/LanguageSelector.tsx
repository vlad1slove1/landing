'use client';

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import useClientLocale from '@/hooks/useClientLocale';
import { languages } from '@/config/config';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import { commonIcon } from '@/components/icon/Icons';
import { Button } from '@nextui-org/button';
import { fontMontserrat } from '@/config/fonts';
import Image from 'next/image';

const LanguageSelector: React.FC = () => {
    const { locale } = useClientLocale();
    const router = useRouter();
    const [imageMap, setImageMap] = useState<Record<string, string>>({});

    const handleLanguageChange = (key: string) => {
        router.push(`/${key}`);
    };

    useEffect(() => {
        const preloadImages = async () => {
            const images: Record<string, string> = {};
            for (const { key } of languages) {
                images[key] = (await import(`@/public/${key}.svg`)).default;
            }
            setImageMap(images);
        };

        preloadImages();
    }, []);

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="light" radius="full" aria-label="translate">
                    <commonIcon.translate size={24} color="white" />
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Select Language">
                {languages.map(({ label, key }) => (
                    <DropdownItem
                        key={key}
                        onClick={() => handleLanguageChange(key)}
                        startContent={
                            imageMap[key] && (
                                <Image
                                    src={imageMap[key]}
                                    alt={label}
                                    width={24}
                                    priority={false}
                                />
                            )
                        }
                        endContent={
                            locale === key && (
                                <commonIcon.check
                                    size={20}
                                    className={locale === key ? 'text-primary' : ''}
                                />
                            )
                        }
                        className={clsx(
                            'px-4 py-1 data-[hover]:scale-105 data-[hover]:text-primary',
                            fontMontserrat.className
                        )}
                    >
                        {label}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export default LanguageSelector;
