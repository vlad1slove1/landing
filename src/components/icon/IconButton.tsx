import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

type IconButtonProps = {
    icon: ReactNode;
    animate?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
    HTMLMotionProps<'button'>;

const IconButton: React.FC<IconButtonProps> = ({
    icon,
    onClick,
    animate = false,
    ...motionProps
}) => {
    const ButtonComponent = animate ? motion.button : 'button';

    return (
        <ButtonComponent
            type="button"
            onClick={onClick}
            className="absolute right-4"
            aria-label="icon-button"
            {...(animate && {
                whileHover: { scale: 1.2 },
                whileTap: { scale: 0.9 },
                ...motionProps,
            })}
        >
            {icon}
        </ButtonComponent>
    );
};

export default IconButton;
