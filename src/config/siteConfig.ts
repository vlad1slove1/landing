import type { NavItem } from '@/types/navItem';

export type SiteConfigProps = {
    name: string;
    description: string;
    header: {
        navItems: NavItem[];
    };
    footer: {
        about: string;
    };
};

const navItems: NavItem[] = [{ key: 'about' }, { key: 'products' }, { key: 'contacts' }];

export const languages = [
    { label: 'Русский', href: '/ru', key: 'ru' },
    { label: 'English', href: '/en', key: 'en' },
];

const siteConfig: SiteConfigProps = {
    name: 'UP-BP',
    description: 'Unlimited Performance Business Processes',
    header: { navItems },
    footer: {
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
};

export default siteConfig;
