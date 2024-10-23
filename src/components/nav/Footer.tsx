'use client';

import React from 'react';
import { ListItem, ListItems } from '@/components/ListItem';
import { Logo, socialIcon } from '@/components/Icons';
import siteConfig from '@/config/SiteConfig';
import { Path } from '@/lib/enums';
import { Link } from '@nextui-org/link';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-b from-primary/50 to-primary text-center text-foreground lg:text-left">
            <div className="container mx-auto max-w-7xl px-6 ">
                <div className="flex items-center justify-center border-b-2 border-foreground/50 p-6 dark:border-foreground/50 lg:justify-between">
                    <div className="mr-12 hidden lg:block">
                        <span>Следите за нами в социальных сетях</span>
                    </div>
                    {/* Social network icons container */}
                    <div className="flex justify-center gap-2">
                        {siteConfig.footer.socials.map(({ icon, href }) => {
                            const Icon = socialIcon[icon as keyof typeof socialIcon];
                            return <Icon key={`${icon}_icon`} href={href} />;
                        })}
                    </div>
                </div>

                {/* Main container */}
                <div className="py-10 md:text-left text-left">
                    <div className="grid-1 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {/* Company about section */}
                        <div>
                            <h6 className="mb-4 flex items-center justify-center font-semibold md:justify-start space-x-2">
                                <Link href={Path.HOME} className="static">
                                    <Logo />
                                </Link>
                                <span className="uppercase">Company name</span>
                            </h6>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        {/* Products section */}
                        <div className="flex flex-col lg:items-center">
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Решения
                            </h6>
                            <ListItems items={siteConfig.footer.products} />
                        </div>
                        {/* Useful links section */}
                        <div className="flex flex-col lg:items-center">
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Полезные ссылки
                            </h6>
                            <ListItems items={siteConfig.footer.links} />
                        </div>
                        {/* Contact section */}
                        <div>
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Контакты
                            </h6>
                            <div className="flex flex-col justify-start gap-4">
                                {siteConfig.footer.contactItems.map(({ icon, label, href }) => {
                                    return (
                                        <ListItem
                                            key={`${icon}_icon`}
                                            icon={icon}
                                            label={label}
                                            href={href}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright section */}
            <div className="p-4 text-center space-x-1">
                <span>&copy;</span>
                <Link href={Path.HOME} className="static text-foreground hover:text-secondary">
                    Company name
                </Link>
                <span>{currentYear}</span>
            </div>
        </footer>
    );
};

export default Footer;
