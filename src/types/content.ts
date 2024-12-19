export type Content = {
    meta: {
        title: string;
        description: string;
        openGraph: Record<string, string>;
        twitter: Record<string, string>;
    };

    header: {
        navbar: Record<string, { label: string; scrollId?: string; href?: string }>;
    };

    sections: {
        general: {
            h1: string;
            p1: string;
            h2: string;
            button: string;
        };

        about: {
            h1: string;
            cards: Record<string, { header: string; main: string; sub: string }>;
        };

        services: Record<
            string,
            {
                label: string;
                items: string[];
            }
        >;

        products: {
            label: string;
            description: string;
            products: Record<
                string,
                {
                    label: string;
                    items: string[];
                }
            >;
        };

        info: {
            label: string;
            backgroundLabel: string;
            paragraphs: {
                [key: string]: string;
            };
        };

        solutions: {
            label: string;
            description: string;
            motivation: string;
            solutions: Record<string, { header: string; main: string; sub: string }>;
        };

        modular: {
            label: string;
            solutions: Record<
                string,
                {
                    main: string;
                    sub?: string;
                }
            >;
        };

        form: {
            label: string;
            description: string;
            contacts: {
                label: string;
                contacts: Record<string, { label: string; href: string }>;
            };
            inputs: {
                errors: Record<string, string>;
                [key: string]: string | Record<string, string>;
            };
            privacyPolicy: string;
            submitButton: string;
            saveContact: string;
        };
    };

    footer: {
        requisites: Record<string, string>;
        contacts: Record<string, { label: string; href: string; text?: string }>;
        links: Record<string, { label: string; scrollId?: string; href?: string }>;
    };

    contacts: {
        label: string;
        button: string;
        saveContact: string;
        contacts: Record<
            string,
            {
                fullName: string;
                position: string;
                email: string;
                phone: string;
            }
        >;
    };

    notFound: {
        title: string;
        label: string;
        description: string;
        button: string;
    };

    policy: {
        label: string;
        button: string;
        chapters: Record<
            string,
            {
                title: string;
                articles?: Record<string, string>;
                table?: Record<string, string>;
            }
        >;
    };
};
