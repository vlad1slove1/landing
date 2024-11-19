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
                default: '#ffffff',
                primary: '#4A8EA0',
                secondary: '#CAE7EF',
                danger: '#FF5842',
                success: '#41C14E',
                warning: '#F2D026',
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
};

export default config;
