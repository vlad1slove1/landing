'use client';

import useClientLocale from '@/hooks/useClientLocale';
import React from 'react';
import useDeviceWidth from '@/hooks/useDeviceWidth';
import { MOBILE_WIDTH_BREAKPOINT } from '@/lib/constants';
import { Link } from '@nextui-org/link';

const VCFContact = () => {
    const isMobile = useDeviceWidth(MOBILE_WIDTH_BREAKPOINT);
    const { translations } = useClientLocale();

    if (!isMobile) {
        return null;
    }

    return (
        <Link href="/contact.vcf" target="_blank" download="Maltsev_Valeriy_UPBP_Contact.vcf">
            {translations.sections.form?.saveContact}
        </Link>
    );
};

export default VCFContact;
