import { ListItem } from '@/components/ui/ListItem';
import { NavItem } from '@/types/navItem';
import { Path, SocialMediaLink } from '@/lib/enums';
import { Input } from '@/types/input';

export type SiteConfigProps = {
    name: string;
    description: string;
    header: {
        navItems: NavItem[];
    };
    footer: {
        about: string;
        socialsSection: {
            label: string;
            items: ListItem[];
        };
        sections: Array<{
            label: string;
            items: ListItem[];
        }>;
        contactSection: {
            label: string;
            items: ListItem[];
        };
    };
    login: {
        title: string;
        subtitle: string;
        inputs: Array<{ label: string; input: Input }>;
        submitButtonLabel: string;
    };
};

const navItems: NavItem[] = [
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
];

const socialsSection = {
    label: 'Следите за нами в социальных сетях',
    items: [
        { icon: 'telegram', href: SocialMediaLink.TELEGRAM },
        { icon: 'vk', href: SocialMediaLink.VK },
        { icon: 'github', href: SocialMediaLink.GITHUB },
    ],
};

const footerSections = [
    {
        label: 'Решения',
        items: [
            { label: 'Решение №1', href: Path.SOLUTIONS },
            { label: 'Решение №2', href: Path.SOLUTIONS },
            { label: 'Решение №3', href: Path.SOLUTIONS },
        ],
    },
    {
        label: 'Полезные ссылки',
        items: [
            { label: 'Тарифы', href: Path.PRICING },
            { label: 'Полезное', href: Path.MISC },
            { label: 'О нас', href: Path.ABOUT },
        ],
    },
];

const contactSection = {
    label: 'Контакты',
    items: [
        { icon: 'home', label: '119049 г. Москва, ул. Донская, д. 8 стр. 1' },
        { icon: 'letter', label: 'info@example.com', href: 'mailto:info@example.com' },
        { icon: 'phone', label: '+1234567890', href: 'tel:+1234567890' },
    ],
};

const loginConfig = {
    title: 'Авторизация',
    subtitle: 'После авторизации вас перенаправит на панель администратора',
    inputs: [
        {
            label: 'Пользователь',
            input: {
                name: 'username',
                type: 'text' as const,
                icon: 'user',
            },
        },
        {
            label: 'Пароль',
            input: {
                name: 'password',
                type: 'password' as const,
                icon: 'eye',
            },
        },
    ],
    submitButtonLabel: 'Войти',
};

const siteConfig: SiteConfigProps = {
    name: 'Site',
    description: 'Description',
    header: { navItems },
    footer: {
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        socialsSection: socialsSection,
        sections: footerSections,
        contactSection: contactSection,
    },
    login: loginConfig,
};

export default siteConfig;
