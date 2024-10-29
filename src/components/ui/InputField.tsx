import React, { InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import IconButton from '@/components/icon/IconButton';

export type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    icon?: ReactNode;
    onIconClick?: () => void;
    animateIcon?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
    label,
    icon,
    onIconClick,
    animateIcon = false,
    className,
    ...inputProps
}) => (
    <>
        {label && <label className="text-sm ml-2 block">{label}</label>}
        <div className="relative flex items-center">
            <input {...inputProps} className={clsx('w-full', className)} />
            {icon &&
                (onIconClick ? (
                    <IconButton icon={icon} onClick={onIconClick} animate={animateIcon} />
                ) : (
                    <span className="absolute right-4">{icon}</span>
                ))}
        </div>
    </>
);

export default InputField;
