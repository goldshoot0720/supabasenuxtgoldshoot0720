import { c as defineEventHandler, u as useRuntimeConfig, e as createError } from '../../../_/nitro.mjs';
import { Client } from 'pg';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const article = defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const client = new Client({
    host: config.DB_PG_HOST,
    port: Number(config.DB_PG_PORT),
    user: config.DB_PG_USER,
    password: config.DB_PG_PASSWORD,
    database: config.DB_PG_NAME
  });
  try {
    await client.connect();
    const res = await client.query("SELECT * FROM article");
    return res.rows;
  } catch (err) {
    console.error("[POSTGRESQL] QUERY ERROR:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "FAILED TO QUERY POSTGRESQL"
    });
  } finally {
    await client.end();
  }
});

export { article as default };
//# sourceMappingURL=article.mjs.map
