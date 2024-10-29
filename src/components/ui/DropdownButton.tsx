import React from 'react';
import { NavItem } from '@/types/navItem';
import { AnimatePresence, motion } from 'framer-motion';
import { commonIcon } from '@/components/icon/Icons';
import DropdownCardItem from '@/components/ui/DropdownCardItem';

type Props = {
    item: NavItem;
    openDropdown: string | null;
    onMouseEnter: (label: string) => void;
    onMouseLeave: () => void;
};

const icons = {
    chevronRight: commonIcon['chevronRight'],
};

const DropdownButton: React.FC<Props> = ({ item, openDropdown, onMouseEnter, onMouseLeave }) => {
    return (
        <div onMouseEnter={() => onMouseEnter(item.label)} onMouseLeave={onMouseLeave}>
            <button
                className={`flex items-center space-x-2 rounded-lg focus:outline-none ${
                    openDropdown === item.label ? 'text-secondary' : 'hover:text-secondary'
                }`}
                aria-label="Dropdown button"
                aria-haspopup="true"
                aria-expanded={openDropdown === item.label}
            >
                <span>{item.label}</span>
                <icons.chevronRight
                    size={16}
                    className={`transition-transform duration-300 ${
                        openDropdown === item.label ? 'transform rotate-90' : ''
                    }`}
                    aria-hidden="true"
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
                                    onClick={() => onMouseLeave()}
                                />
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DropdownButton;
