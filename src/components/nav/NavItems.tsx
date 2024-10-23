import React, { useState } from 'react';
import { commonIcon } from '@/components/Icons';
import { Link } from '@nextui-org/link';
import { NavItem } from '@/types/navItem';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
    items: NavItem[];
};

const icons = {
    chevronRight: commonIcon['chevronRight'],
    arrowUpRight: commonIcon['arrowUpRight'],
};

export const NavItems: React.FC<Props> = ({ items }) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const handleMouseEnter = (label: string) => {
        setOpenDropdown(label);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    const renderDropdown = (item: NavItem) => (
        <div
            key={item.label}
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={() => handleMouseLeave()}
        >
            <button
                className={`flex items-center space-x-2 rounded-lg focus:outline-none ${
                    openDropdown === item.label ? 'text-secondary' : 'hover:text-secondary'
                }`}
            >
                <span>{item.label}</span>
                <icons.chevronRight
                    size={16}
                    className={`transition-transform duration-300 ${
                        openDropdown === item.label ? 'transform rotate-90' : ''
                    }`}
                />
            </button>

            <AnimatePresence>
                {openDropdown === item.label && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.1 }}
                        className="absolute p-1 overflow-hidden"
                    >
                        <ul className="my-2 flex flex-col border-1 shadow-xl bg-background divide-y-2">
                            {item.children?.map(({ href, label, description }) => (
                                <DropdownCardItem
                                    key={href}
                                    href={href}
                                    label={label}
                                    description={description}
                                    onClick={() => setOpenDropdown(null)}
                                />
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    return (
        <div className="hidden lg:flex space-x-10 text-large">
            {items.map((item) =>
                item.children ? (
                    renderDropdown(item)
                ) : (
                    <Link
                        href={item.href}
                        className="text-foreground hover:text-secondary mx-4 text-large"
                        key={item.href}
                    >
                        {item.label}
                    </Link>
                )
            )}
        </div>
    );
};

export const DropdownCardItem: React.FC<NavItem & { onClick: () => void }> = ({
    href,
    label,
    description,
    onClick,
}) => (
    <Link
        href={href}
        className="flex flex-col items-start justify-between max-w-md p-4 bg-content1 group hover:bg-primary/50"
        onClick={onClick}
    >
        <div className="flex items-center justify-between w-full mb-2">
            <p className="text-lg font-medium text-gray-900 dark:text-gray-50">{label}</p>
            <span className="text-secondary dark:text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <icons.arrowUpRight size={24} />
            </span>
        </div>
        <p className="text-sm text-justify text-gray-700 dark:text-gray-300">{description}</p>
    </Link>
);
