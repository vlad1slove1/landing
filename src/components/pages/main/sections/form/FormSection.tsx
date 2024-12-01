import React from 'react';
import getLocale from '@/app/[locale]/getLocale';
import { Link } from '@nextui-org/link';
import Form from '@/components/pages/main/sections/form/Form';
import VCFContact from '@/components/pages/main/sections/form/VCFContact';
import { ElementId } from '@/lib/enums';

import type { LangParams } from '@/app/[locale]/layout';

import styles from './FormSection.module.scss';

const FormSection: React.FC<LangParams> = async ({ locale }) => {
    const t = await getLocale(locale);
    const { label, description, contacts, saveContact } = t.sections.form;

    return (
        <div id={ElementId.FORM_SECTION} className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.topContent}>
                    <ul>
                        <li>{label}</li>
                    </ul>
                    <h1>{description}</h1>
                </div>

                <div className={styles.formContainer}>
                    <div className={styles.formContacts}>
                        <h1>{contacts.label}</h1>
                        <ul className={styles.contacts}>
                            <li key="vcard" className="flex md:hidden lg:hidden">
                                <VCFContact label={saveContact} />
                            </li>
                            {Object.entries(contacts.contacts).map(([key, { label, href }]) => (
                                <li key={key}>
                                    <Link isExternal href={href}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Form />
                </div>
            </div>
        </div>
    );
};

export default FormSection;
