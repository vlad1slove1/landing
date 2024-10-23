import React from 'react';
import MobileMenu from '@/components/mobile/MobileMenu';
import { NavItems } from '@/components/nav/NavItems';
import { Path } from '@/lib/enums';
import ThemeSwitch from '@/components/nav/ThemeSwitch';
import siteConfig from '@/config/SiteConfig';
import { Link } from '@nextui-org/link';
import { Logo } from '@/components/Icons';

const Navbar: React.FC = () => {
    return (
        <div className="py-4 lg:py-2 flex flex-row justify-around align-middle items-center container mx-auto max-w-7xl">
            <Link href={Path.HOME}>
                <Logo />
            </Link>
            <NavItems items={siteConfig.header.navItems} />

            <div className="flex justify-end align-middle space-x-6">
                <ThemeSwitch />
                <MobileMenu items={siteConfig.header.navItems} />
            </div>
        </div>
    );
};

export default Navbar;
