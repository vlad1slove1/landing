'use client';

import React, { FormEvent, useState } from 'react';
import InputField from '@/components/InputField';
import { authUser } from '@/services/authService';
import siteConfig from '@/config/siteConfig';
import { commonIcon } from '@/components/Icons';
import SubmitButton from '@/components/SubmitButton';
import { Link } from '@nextui-org/link';
import { Path } from '@/lib/enums';

const LoginForm: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
    const [formState, setFormState] = useState({
        username: '',
        password: '',
        error: '',
        loading: false,
        showPassword: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
            error: '',
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setFormState((prevState) => ({ ...prevState, error: '', loading: true }));
        try {
            const response = await authUser({
                username: formState.username,
                password: formState.password,
            });

            if (response.token) {
                onSuccess();
            }
        } catch (err) {
            console.error('Login request failed:', err);
            setFormState((prevState) => ({
                ...prevState,
                error: 'Неправильный логин и/или пароль',
            }));
        } finally {
            setFormState((prevState) => ({ ...prevState, loading: false }));
        }
    };

    const togglePasswordVisibility = () => {
        setFormState((prevState) => ({
            ...prevState,
            showPassword: !prevState.showPassword,
        }));
    };

    return (
        <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="mb-8">
                    <h3 className="text-gray-800 text-3xl font-extrabold">
                        {siteConfig.login.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                        {siteConfig.login.subtitle}
                    </p>
                </div>

                <InputField
                    placeholder={siteConfig.login.inputs['user']?.label}
                    type="text"
                    name="username"
                    value={formState.username}
                    onChange={handleChange}
                    className="text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                    icon={<commonIcon.user />}
                />

                <InputField
                    placeholder={siteConfig.login.inputs['password']?.label}
                    type={formState.showPassword ? 'text' : 'password'}
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                    onFocus={() => setFormState((prev) => ({ ...prev, error: '' }))}
                    className="text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                    icon={<commonIcon.eye />}
                    onIconClick={togglePasswordVisibility}
                    animateIcon
                />

                {formState.error && (
                    <div className="text-red-600 text-sm mb-4">{formState.error}</div>
                )}

                <div className="!mt-8">
                    <SubmitButton
                        type="submit"
                        isLoading={formState.loading}
                        className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                    >
                        {siteConfig.login.submitButtonLabel}
                    </SubmitButton>
                </div>

                <div className="!mt-8 flex justify-self-end">
                    <Link
                        href={Path.HOME}
                        className="text-blue-600 hover:text-blue-500 font-semibold text-xs"
                    >
                        на главную
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
