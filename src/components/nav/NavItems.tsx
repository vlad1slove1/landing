import React, { useState } from 'react';
import { Link } from '@nextui-org/link';
import { NavItem } from '@/types/navItem';
import DropdownButton from '@/components/ui/DropdownButton';

type Props = {
    items: NavItem[];
};

const NavItems: React.FC<Props> = ({ items }) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const handleMouseEnter = (label: string) => {
        setOpenDropdown(label);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    return (
        <div className="hidden lg:flex space-x-10 text-large">
            {items.map((item) =>
                item.children ? (
                    <DropdownButton
                        key={item.label}
                        item={item}
                        openDropdown={openDropdown}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                ) : (
                    <Link
                        href={item.href}
                        className="text-foreground hover:text-secondary mx-4 text-large"
                        key={item.href}
                        aria-label={item.label}
                    >
                        {item.label}
                    </Link>
                )
            )}
        </div>
    );
};

export default NavItems;
