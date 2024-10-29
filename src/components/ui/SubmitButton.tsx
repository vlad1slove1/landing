import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { commonIcon } from '@/components/icon/Icons';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    isLoading?: boolean;
};

const SubmitButton: React.FC<Props> = ({ isLoading = false, children, ...rest }) => {
    return (
        <button type="button" disabled={isLoading} aria-label="submitting form" {...rest}>
            {isLoading ? <commonIcon.loader className="animate-spin mx-auto" /> : children}
        </button>
    );
};

export default SubmitButton;
