import React from 'react';
import { Link } from '@nextui-org/link';

const VCFContact: React.FC<{ label: string }> = ({ label }) => {
    return (
        <Link href="/contact.vcf" target="_blank" download="Maltsev_Valeriy_UPBP_Contact.vcf">
            {label}
        </Link>
    );
};

export default VCFContact;
