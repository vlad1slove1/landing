import type { NavItem } from '@/types/navItem';

export const navItems: NavItem[] = [{ key: 'about' }, { key: 'products' }, { key: 'contacts' }];

export const languages = [
    { label: 'Русский', href: '/ru', key: 'ru' },
    { label: 'English', href: '/en', key: 'en' },
];

const siteConfig = {
    name: 'UP-BP',
    description: 'Unlimited Performance Business Processes',
};

export default siteConfig;
