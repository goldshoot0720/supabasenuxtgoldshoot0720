import { Database } from "@sqlitecloud/drivers";

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  if (!config.SQLITE_CLOUD_URL) {
    throw createError({
      statusCode: 500,
      statusMessage: "Missing SQLITE_CLOUD_URL",
    });
  }

  const db = new Database(config.SQLITE_CLOUD_URL);

  try {
    console.log("[API] Querying SQLite Cloud...");
    const result = await db.sql`SELECT * FROM article;`;

    if (Array.isArray(result)) {
      console.log("[API] Result is array, count:", result.length);
      return result;
    } else if (result && Array.isArray(result.rows)) {
      console.log("[API] Result has rows, count:", result.rows.length);
      return result.rows;
    } else {
      console.warn("[API] Unknown result format:", result);
      return [];
    }
  } catch (error) {
    console.error("[API] Query error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to query SQLite Cloud",
    });
  } finally {
    await db.close();
  }
});
