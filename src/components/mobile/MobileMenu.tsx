'use client';

import React, { useState } from 'react';
import MobileMenuToggle from './MobileMenuToggle';
import { commonIcon } from '@/components/icon/Icons';
import { NavItem } from '@/types/navItem';
import { Link } from '@nextui-org/link';
import { AnimatePresence, motion } from 'framer-motion';
import useDeviceWidth from '@/hooks/useDeviceWidth';
import { MOBILE_WIDTH_BREAKPOINT } from '@/lib/constants';

type Props = {
    items: NavItem[];
};

const icons = {
    chevronRight: commonIcon['chevronRight'],
    arrowUpRight: commonIcon['arrowUpRight'],
};

const MobileMenu: React.FC<Props> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const isMobile = useDeviceWidth(MOBILE_WIDTH_BREAKPOINT);

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
        setActiveDropdown(null);
    };

    const handleToggleDropdown = (label: string) => {
        if (activeDropdown === label) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(label);
        }
    };

    return (
        <div className="flex align-middle lg:hidden">
            <MobileMenuToggle isOpen={isOpen} handleToggle={handleOpenMenu} />

            {isMobile && (
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-50 flex flex-col p-6 overflow-y-auto top-16 bg-content1"
                        >
                            <nav className="space-y-4 w-full">
                                {items.map((item) =>
                                    item.children ? (
                                        <MobileDropdownItem
                                            key={item.label}
                                            item={item}
                                            isOpen={activeDropdown === item.label}
                                            onToggleDropdown={() =>
                                                handleToggleDropdown(item.label)
                                            }
                                            onMenuClose={() => setIsOpen(false)}
                                        />
                                    ) : (
                                        <div key={item.href}>
                                            <Link
                                                href={item.href}
                                                className="text-lg font-medium text-foreground hover:text-secondary"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        </div>
                                    )
                                )}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </div>
    );
};

type MobileDropdownItemProps = {
    item: NavItem;
    isOpen: boolean;
    onToggleDropdown: () => void;
    onMenuClose: () => void;
};

const MobileDropdownItem: React.FC<MobileDropdownItemProps> = ({
    item,
    isOpen,
    onToggleDropdown,
    onMenuClose,
}) => {
    return (
        <div>
            <button
                onClick={onToggleDropdown}
                aria-label="Mobile dropdown item"
                className="flex items-center justify-between w-full text-lg font-medium text-foreground"
            >
                <span className="hover:text-secondary">{item.label}</span>
                <motion.span animate={{ rotate: isOpen ? 90 : 0 }} className="ml-2">
                    <icons.chevronRight size={24} />
                </motion.span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="py-2 space-y-4"
                    >
                        <ul className="flex flex-col space-y-2">
                            {item.children?.map((subItem) => (
                                <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className="flex flex-col items-start justify-between max-w-md p-4 bg-content2"
                                    onClick={onMenuClose}
                                >
                                    <div className="flex items-center justify-between w-full mb-2">
                                        <p className="text-lg font-medium text-gray-900 dark:text-gray-50">
                                            {subItem.label}
                                        </p>
                                        <span className="text-secondary dark:text-secondary">
                                            <icons.arrowUpRight size={24} />
                                        </span>
                                    </div>
                                    <p className="text-sm text-justify text-gray-700 dark:text-gray-300">
                                        {subItem.description}
                                    </p>
                                </Link>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileMenu;
