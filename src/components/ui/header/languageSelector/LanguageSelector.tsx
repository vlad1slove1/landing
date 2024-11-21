import React from 'react';
import { languages } from '@/config/config';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import { commonIcon } from '@/components/icon/Icons';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { fontMontserrat } from '@/config/fonts';

const LanguageSelector: React.FC<{ lang: string }> = ({ lang }) => {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="light" radius="full" aria-label="translate">
                    <commonIcon.translate size={24} color="white" />
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Select Language">
                {languages.map(({ label, href, key }) => (
                    <DropdownItem
                        as={Link}
                        key={key}
                        href={href}
                        endContent={lang === key && <commonIcon.check size={20} />}
                        className={fontMontserrat.className}
                    >
                        {label}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export default LanguageSelector;
