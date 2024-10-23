import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                default: '#262626',
                focus: '#388cfa',
                primary: '#a1be95',
                secondary: '#f98866',
                danger: '#b41c2b',
                success: '#009f42',
                warning: '#f0ad4e',
            },
            transitionProperty: {
                height: 'height',
            },
        },
    },
    darkMode: 'class',
    plugins: [
        nextui({
            themes: {
                light: {
                    colors: {
                        background: '#ffffff',
                        foreground: '#262526',
                        focus: '#388cfa',
                        content1: '#e1e1e1',
                        content2: '#f0f0f0',
                        content3: '#8d8d93ff',
                        primary: '#a1be95',
                        secondary: '#f98866',
                        danger: '#b41c2b',
                        success: '#009f42',
                        warning: '#f0ad4e',
                    },
                },
                dark: {
                    colors: {
                        background: '#3f4742',
                        foreground: '#ffffff',
                        focus: '#388cfa',
                        content1: '#59665e',
                        content2: '#627168',
                        content3: '#282c28',
                        primary: '#a1be95',
                        secondary: '#f98866',
                        danger: '#b41c2b',
                        success: '#009f42',
                        warning: '#f0ad4e',
                    },
                },
            },
        }),
    ],
};

export default config;
