import VCFContact from '@/components/ui/sections/form/VCFContact';
import React from 'react';
import getLocale from '@/app/[lang]/getLocale';
import { Link } from '@nextui-org/link';
import Form from '@/components/ui/sections/form/Form';

import type { LangParams } from '@/app/[lang]/layout';

import styles from './FormSection.module.scss';

const FormSection: React.FC<LangParams> = async ({ lang }) => {
    const t = await getLocale(lang);
    const { label, description, contacts, saveContact } = t.sections.form;

    return (
        <div className={styles.bg}>
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
                            <li key="vcard" className="flex">
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
