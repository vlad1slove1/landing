import React from 'react';
import getLocale from '@/app/[locale]/getLocale';
import { Link } from '@nextui-org/link';
import Form from '@/components/pages/main/sections/form/Form';
import { ElementId } from '@/lib/enums';

import type { LangParams } from '@/app/[locale]/layout';

import styles from './index.module.scss';

export default async function FormSection({ locale }: LangParams) {
    const t = await getLocale(locale);
    const { label, description, contacts } = t.sections.form;

    return (
        <div className={styles.bg}>
            <div id={ElementId.FORM_SECTION} className={styles.container}>
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
}
