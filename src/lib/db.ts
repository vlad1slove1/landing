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
            host: process.env.DATABASE_HOST,
            database: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
        }),
    }),
});
