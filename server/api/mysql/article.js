import mysql from "mysql2/promise";

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  const connection = await mysql.createConnection({
    host: config.DB_MYSQL_HOST,
    port: Number(config.DB_MYSQL_PORT),
    user: config.DB_MYSQL_USER,
    password: config.DB_MYSQL_PASSWORD,
    database: config.DB_MYSQL_NAME,
  });

  try {
    const [rows] = await connection.execute("SELECT * FROM article");
    return rows;
  } catch (err) {
    console.error("[MYSQL] QUERY ERROR:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "FAILED TO QUERY MYSQL",
    });
  } finally {
    await connection.end();
  }
});
