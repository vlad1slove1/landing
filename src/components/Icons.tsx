import React from 'react';
import Image from 'next/image';
import logo from '@/public/logo_dummy.svg';
import util from '@/util/util';

export const Logo = () => <Image src={logo} alt="logo" width={100} priority />;

export const themeSwitchIcon = {
    sun: util.createIcon(
        <>
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </>
    ),
    moon: util.createIcon(<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>),
};

export const socialIcon = {
    github: util.createIcon(
        <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
        />,
        '0 0 24 24',
        24,
        'fill-secondary stroke-black'
    ),

    telegram: util.createIcon(
        <path
            d="M19.553 2.997a2.25 2.25 0 0 0 -0.7 0.167h-0.003c-0.214 0.085 -1.23 0.512 -2.775 1.16l-5.537 2.332c-3.973 1.672 -7.878 3.32 -7.878 3.32l0.046 -0.018s-0.269 0.088 -0.55 0.281a1.5 1.5 0 0 0 -0.44 0.425c-0.138 0.203 -0.249 0.512 -0.208 0.833 0.068 0.541 0.419 0.866 0.67 1.045 0.255 0.181 0.498 0.266 0.498 0.266h0.006l3.662 1.234c0.164 0.527 1.116 3.656 1.345 4.377 0.135 0.43 0.266 0.7 0.43 0.905q0.118 0.158 0.284 0.263a0.75 0.75 0 0 0 0.184 0.08l-0.038 -0.009c0.011 0.003 0.02 0.012 0.028 0.015 0.03 0.008 0.05 0.011 0.088 0.017 0.58 0.176 1.045 -0.184 1.045 -0.184l0.026 -0.021 2.162 -1.969 3.624 2.78 0.083 0.035c0.755 0.332 1.52 0.147 1.924 -0.178 0.407 -0.328 0.566 -0.747 0.566 -0.747l0.026 -0.068 2.8 -14.347c0.08 -0.354 0.1 -0.685 0.012 -1.007a1.35 1.35 0 0 0 -0.586 -0.785 1.403 1.403 0 0 0 -0.8 -0.203m-0.076 1.537c-0.003 0.047 0.006 0.042 -0.015 0.133v0.008l-2.774 14.197c-0.012 0.02 -0.032 0.065 -0.088 0.109 -0.058 0.046 -0.105 0.076 -0.349 -0.021l-4.433 -3.398 -2.677 2.441 0.563 -3.593 7.242 -6.75c0.298 -0.277 0.199 -0.336 0.199 -0.336 0.021 -0.34 -0.451 -0.1 -0.451 -0.1l-9.132 5.657 -0.003 -0.015 -4.377 -1.474v-0.003l-0.011 -0.002 0.022 -0.009 0.024 -0.012 0.023 -0.008s3.908 -1.647 7.881 -3.32c1.989 -0.838 3.993 -1.681 5.534 -2.333 1.541 -0.647 2.68 -1.122 2.745 -1.147 0.061 -0.024 0.032 -0.024 0.076 -0.024"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
        />,
        '0 0 24 24',
        24,
        'fill-secondary stroke-black'
    ),

    vk: util.createIcon(
        <path
            d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
        />,
        '0 0 24 24',
        24,
        'fill-secondary stroke-black'
    ),
};

export const commonIcon = {
    chevronRight: util.createIcon(
        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
    ),

    arrowUpRight: util.createIcon(
        <path
            d="M7 17l9.2-9.2M17 17V7H7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
        />,
        '0 0 24 24',
        24,
        'fill-secondary stroke-secondary'
    ),

    home: util.createIcon(
        <>
            <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
            <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
        </>
    ),

    letter: util.createIcon(
        <>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6"></polyline>
        </>
    ),

    phone: util.createIcon(
        <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />
    ),

    menu: util.createIcon(
        <>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </>
    ),

    close: util.createIcon(
        <>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </>
    ),
};
