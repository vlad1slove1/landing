import React from 'react';
import { Link } from '@nextui-org/link';
import { commonIcon } from '@/components/Icons';

export type ListItem = {
    label?: string;
    icon?: string;
    href?: string;
};

export const ListItem: React.FC<ListItem> = ({ icon, label, href }) => {
    const Icon = commonIcon[icon as keyof typeof commonIcon];
    return (
        <li className="flex items-center space-x-3">
            {icon && (
                <div className="flex-shrink-0 w-6 h-6">
                    <Icon size={24} />
                </div>
            )}
            {href ? (
                <Link href={href} color="foreground" className="hover:text-secondary static">
                    {label}
                </Link>
            ) : (
                <p className="text-left">{label}</p>
            )}
        </li>
    );
};

export const ListItems: React.FC<{ items: ListItem[] }> = ({ items }) => {
    return (
        <ul className="space-y-4">
            {items.map((item, index) => (
                <ListItem key={index} icon={item.icon} label={item.label} href={item.href} />
            ))}
        </ul>
    );
};
