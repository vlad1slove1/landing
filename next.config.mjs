import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { i18n } from 'next-i18next';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'components')],
    },
    i18n,
};

export default nextConfig;
