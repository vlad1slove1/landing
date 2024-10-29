import React from 'react';
import { NavItem } from '@/types/navItem';
import { Link } from '@nextui-org/link';
import { commonIcon } from '@/components/icon/Icons';

type Props = NavItem & {
    onClick: () => void;
};

const icons = {
    arrowUpRight: commonIcon['arrowUpRight'],
};

export const DropdownCardItem: React.FC<Props> = ({ href, label, description, onClick }) => (
    <li className="max-w-md p-4 bg-content1 group hover:bg-primary/50" role="menuitem">
        <Link
            href={href}
            onClick={onClick}
            className="flex flex-col items-start justify-between"
            aria-label={`Go to ${label}: ${description}`}
        >
            <div className="flex items-center justify-between w-full mb-2">
                <p className="text-lg font-medium text-gray-900 dark:text-gray-50">{label}</p>
                <span
                    className="text-secondary dark:text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                >
                    <icons.arrowUpRight size={24} />
                </span>
            </div>
            <p className="text-sm text-justify text-gray-700 dark:text-gray-300">{description}</p>
        </Link>
    </li>
);

export default DropdownCardItem;
