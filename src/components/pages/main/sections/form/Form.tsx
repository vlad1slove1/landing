'use client';

import React from 'react';
import StyledButton from '@/components/ui/styledButton';
import { Checkbox } from '@nextui-org/checkbox';
import { Input, Textarea } from '@nextui-org/input';
import clsx from 'clsx';
import useClientLocale from '@/hooks/useClientLocale';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from '@nextui-org/link';
import handleFormSubmit from '@/components/pages/main/sections/form/handleFormSubmit';
import { Path } from '@/lib/enums';

import styles from './Form.module.scss';

export type FormInputs = {
    fullName: string;
    company: string;
    contact: string;
    consent: boolean;
    comment?: string;
};

const Form: React.FC = () => {
    const { translations } = useClientLocale();
    const { form } = translations.sections ?? {};

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        const isSuccessful = await handleFormSubmit(data);
        if (isSuccessful) {
            reset();
        }
    };

    const validatePhone = (value: string) => {
        const cleanedValue = value.replace('+7', '').replace(/\D+/g, '');

        const phoneRegex = /^\d{3}\d{3}\d{2}\d{2}$/;
        const isValidPhone = phoneRegex.test(cleanedValue);

        return isValidPhone || form?.inputs.errors.invalidPhone;
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.field}>
                            <Input
                                id="fullName"
                                type="text"
                                variant="underlined"
                                color="primary"
                                isRequired
                                label={form?.inputs.fullName as string}
                                aria-label={form?.inputs.fullName as string}
                                {...register('fullName', {
                                    required: form?.inputs.errors.required,
                                })}
                                isInvalid={!!errors.fullName}
                                errorMessage={errors.fullName?.message}
                                className={styles.styledText}
                            />
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.field}>
                            <Input
                                id="company"
                                type="text"
                                variant="underlined"
                                color="primary"
                                isRequired
                                label={form?.inputs.company as string}
                                aria-label={form?.inputs.company as string}
                                {...register('company', {
                                    required: form?.inputs.errors.required,
                                })}
                                isInvalid={!!errors.company}
                                errorMessage={errors.company?.message}
                                className={styles.styledText}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={clsx(styles.col, styles['col--half'])}>
                        <div className={styles.field}>
                            <Input
                                id="contact"
                                type="text"
                                variant="underlined"
                                color="primary"
                                isRequired
                                label={form?.inputs.contact as string}
                                aria-label={form?.inputs.contact as string}
                                placeholder="(___)-___-__-__"
                                startContent="+7"
                                {...register('contact', {
                                    required: form?.inputs.errors.required,
                                    validate: validatePhone,
                                })}
                                isInvalid={!!errors.contact}
                                errorMessage={errors.contact?.message}
                                className={styles.styledText}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.field}>
                    <Textarea
                        id="comment"
                        variant="underlined"
                        color="primary"
                        minRows={1}
                        label={form?.inputs.comment as string}
                        aria-label={form?.inputs.comment as string}
                        {...register('comment')}
                        className={styles.styledText}
                    />
                </div>

                <div className={styles.field}>
                    <Checkbox
                        id="consent"
                        isRequired
                        {...register('consent', {
                            required: form?.inputs.errors.required,
                        })}
                        aria-label={form?.inputs.consent as string}
                        isInvalid={!!errors.consent}
                        className={clsx(styles.checkbox, {
                            [styles.error]: !!errors.consent,
                        })}
                    >
                        <div
                            className={clsx(
                                [styles.styledText],
                                { [styles.error]: !!errors.consent },
                                'flex flex-row gap-1'
                            )}
                        >
                            {form?.inputs.consent as string}
                            <Link href={Path.PRIVACY}>{form?.privacyPolicy}</Link>
                        </div>
                    </Checkbox>
                </div>

                <StyledButton label={form?.submitButton} type="submit" className={styles.button} />
            </form>
        </div>
    );
};

export default Form;
