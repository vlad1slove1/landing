import { ListItem } from '@/components/ListItem';
import { NavItem } from '@/types/navItem';
import { Path, SocialMediaLink } from '@/lib/enums';

export type SiteConfigProps = {
    name: string;
    description: string;
    header: {
        navItems: NavItem[];
    };
    footer: {
        about: string;
        socialAnnounce: string;
        socials: ListItem[];
        firstSectionLabel: string;
        firstSectionItems: ListItem[];
        secondSectionLabel: string;
        secondSectionItems: ListItem[];
        contactSectionLabel: string;
        contactSectionItems: ListItem[];
    };
};

const siteConfig: SiteConfigProps = {
    name: 'Site',
    description: 'Description',
    header: {
        navItems: [
            {
                label: 'Решения',
                children: [
                    {
                        href: '/#',
                        label: 'Solution 1',
                        description:
                            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
                    },
                    {
                        href: '/#',
                        label: 'Solution 2',
                        description:
                            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
                    },
                ],
            },
            {
                label: 'Инструменты',
                children: [
                    {
                        href: '/#',
                        label: 'Tool 1',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    },
                    {
                        href: '/#',
                        label: 'Tool 2',
                        description:
                            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    },
                    {
                        href: '/#',
                        label: 'Tool 3',
                        description:
                            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    },
                ],
            },
            { href: Path.PRICING, label: 'Тарифы' },
            { href: Path.MISC, label: 'Полезное' },
            { href: Path.ABOUT, label: 'О нас' },
        ],
    },
    footer: {
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        socialAnnounce: 'Следите за нами в социальных сетях',
        socials: [
            { icon: 'telegram', href: SocialMediaLink.TELEGRAM },
            { icon: 'vk', href: SocialMediaLink.VK },
            { icon: 'github', href: SocialMediaLink.GITHUB },
        ],
        firstSectionLabel: 'Решения',
        firstSectionItems: [
            { label: 'Решение №1', href: Path.SOLUTIONS },
            { label: 'Решение №2', href: Path.SOLUTIONS },
            { label: 'Решение №3', href: Path.SOLUTIONS },
        ],
        secondSectionLabel: 'Полезные ссылки',
        secondSectionItems: [
            { label: 'Тарифы', href: Path.PRICING },
            { label: 'Полезное', href: Path.MISC },
            { label: 'О нас', href: Path.ABOUT },
        ],
        contactSectionLabel: 'Контакты',
        contactSectionItems: [
            { icon: 'home', label: '119049 г. Москва, ул. Донская, д. 8 стр. 1' },
            {
                icon: 'letter',
                label: 'info@example.com',
                href: 'mailto:info@example.com',
            },
            { icon: 'phone', label: '+1234567890', href: 'tel:+1234567890' },
        ],
    },
};

export default siteConfig;
