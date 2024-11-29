import React from 'react';
import { Link } from '@nextui-org/link';
import { API_PREFIX } from '@/lib/constants';
import { Path } from '@/lib/enums';

const VCFContact: React.FC<{ label: string }> = ({ label }) => {
    return (
        <Link
            href={API_PREFIX + Path.VCARD}
            target="_blank"
            download="Maltsev_Valeriy_UPBP_Contact.vcf"
        >
            {label}
        </Link>
    );
};

export default VCFContact;
