import { c as defineEventHandler, u as useRuntimeConfig, e as createError } from '../../../_/nitro.mjs';
import mysql from 'mysql2/promise';
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
  const connection = await mysql.createConnection({
    host: config.DB_MYSQL_HOST,
    port: Number(config.DB_MYSQL_PORT),
    user: config.DB_MYSQL_USER,
    password: config.DB_MYSQL_PASSWORD,
    database: config.DB_MYSQL_NAME
  });
  try {
    const [rows] = await connection.execute("SELECT * FROM article");
    return rows;
  } catch (err) {
    console.error("[MYSQL] QUERY ERROR:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "FAILED TO QUERY MYSQL"
    });
  } finally {
    await connection.end();
  }
});

export { article as default };
//# sourceMappingURL=article.mjs.map
