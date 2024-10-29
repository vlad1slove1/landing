import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';

import type { GeneratedAlways } from 'kysely';

interface Database {
    admin: {
        id: GeneratedAlways<string>;
        username: string;
        password: string;
    };
}

export const db = new Kysely<Database>({
    dialect: new PostgresDialect({
        pool: new Pool({
            host: process.env.POSTGRES_HOST,
            database: process.env.POSTGRES_DATABASE,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            ssl: {
                rejectUnauthorized: false,
            },
        }),
    }),
});
