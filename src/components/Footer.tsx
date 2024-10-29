'use client';

import React from 'react';
import { ListItem, ListItems } from '@/components/ListItem';
import { Logo, socialIcon } from '@/components/Icons';
import siteConfig from '@/config/siteConfig';
import { Path } from '@/lib/enums';
import { Link } from '@nextui-org/link';
import useIsAuthPage from '@/hooks/useIsAuthPage';

const Footer: React.FC = () => {
    const isAdminPage = useIsAuthPage();

    if (isAdminPage) return null;

    return (
        <footer className="bg-gradient-to-b from-primary/50 to-primary text-center text-foreground lg:text-left">
            <div className="container mx-auto max-w-7xl px-6 ">
                <div className="flex items-center justify-center border-b-2 border-foreground/50 p-6 dark:border-foreground/50 lg:justify-between">
                    <div className="mr-12 hidden lg:block">
                        <span>{siteConfig.footer.socialsSection.label}</span>
                    </div>
                    {/* Social network icons container */}
                    <div className="flex justify-center gap-2">
                        {siteConfig.footer.socialsSection.items.map(({ icon, href }) => {
                            const Icon = socialIcon[icon as keyof typeof socialIcon];
                            return <Icon key={`${icon}_icon`} href={href} />;
                        })}
                    </div>
                </div>

                {/* MainContainer container */}
                <div className="py-10 md:text-left text-left">
                    <div className="grid-1 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {/* Company about section */}
                        <div>
                            <h6 className="mb-4 flex items-center justify-center font-semibold md:justify-start space-x-2">
                                <Link href={Path.HOME} className="static">
                                    <Logo />
                                </Link>
                                <span className="uppercase">{siteConfig.name}</span>
                            </h6>
                            <p>{siteConfig.footer.about}</p>
                        </div>
                        {/* First section */}
                        <div className="flex flex-col lg:items-center">
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                {siteConfig.footer.sections[0].label}
                            </h6>
                            <ListItems items={siteConfig.footer.sections[0].items} />
                        </div>
                        {/* Second section */}
                        <div className="flex flex-col lg:items-center">
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                {siteConfig.footer.sections[1].label}
                            </h6>
                            <ListItems items={siteConfig.footer.sections[1].items} />
                        </div>
                        {/* Contact section */}
                        <div>
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                {siteConfig.footer.contactSection.label}
                            </h6>
                            <div className="flex flex-col justify-start gap-4">
                                {siteConfig.footer.contactSection.items.map(
                                    ({ icon, label, href }) => {
                                        return (
                                            <ListItem
                                                key={`${icon}_icon`}
                                                icon={icon}
                                                label={label}
                                                href={href}
                                            />
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright section */}
            <div className="p-4 text-center space-x-1">
                <span>&copy;</span>
                <Link href={Path.HOME} className="static text-foreground hover:text-secondary">
                    {siteConfig.name}
                </Link>
                <span>{new Date().getFullYear()}</span>
            </div>
        </footer>
    );
};

export default Footer;
