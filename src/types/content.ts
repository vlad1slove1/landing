export type Content = {
    header: {
        navbar: Record<string, string>;
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
    };
};
