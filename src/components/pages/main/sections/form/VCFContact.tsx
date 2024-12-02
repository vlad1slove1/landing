'use client';

import React from 'react';
import { Link } from '@nextui-org/link';
import { API_PREFIX, VCF_FILE_EXTENSION } from '@/lib/constants';
import { Path } from '@/lib/enums';

type Props = {
    contactName: string;
    label: string;
    filename?: string;
};

const VCFContact: React.FC<Props> = ({ contactName, label, filename = 'contact' }) => {
    const searchParams = new URLSearchParams();
    searchParams.set('name', contactName);

    const vCardUrl = `${API_PREFIX + Path.VCARD}?${searchParams.toString()}`;

    return (
        <Link
            href={vCardUrl}
            target="_blank"
            download={`${filename}${VCF_FILE_EXTENSION}`}
            className="flex md:hidden lg:hidden"
        >
            {label}
        </Link>
    );
};

export default VCFContact;
