import { Montserrat, Unbounded } from 'next/font/google';

export const fontMontserrat = Montserrat({
    subsets: ['cyrillic', 'latin'],
    variable: '--font-montserrat',
});

export const fontUnbounded = Unbounded({
    subsets: ['cyrillic', 'latin'],
    variable: '--font-unbounded',
});
