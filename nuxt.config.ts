export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    // 👇 僅後端可存取（建議把 MySQL 與 API 金鑰都放這裡）
    DB_MYSQL_HOST: process.env.DB_MYSQL_HOST,
    DB_MYSQL_PORT: process.env.DB_MYSQL_PORT,
    DB_MYSQL_USER: process.env.DB_MYSQL_USER,
    DB_MYSQL_PASSWORD: process.env.DB_MYSQL_PASSWORD,
    DB_MYSQL_NAME: process.env.DB_MYSQL_NAME,

    DB_PG_HOST: process.env.DB_PG_HOST,
    DB_PG_PORT: process.env.DB_PG_PORT,
    DB_PG_USER: process.env.DB_PG_USER,
    DB_PG_PASSWORD: process.env.DB_PG_PASSWORD,
    DB_PG_NAME: process.env.DB_PG_NAME,

    DB_MONGO_URI: process.env.DB_MONGO_URI,
    DB_MONGO_NAME: process.env.DB_MONGO_NAME,

    SQLITE_CLOUD_URL: process.env.SQLITE_CLOUD_URL,

    // 👇 提供給前端用的 API 金鑰可放這裡（非敏感）
    public: {
      appwriteEndpoint: process.env.APPWRITE_ENDPOINT,
      appwriteProjectId: process.env.APPWRITE_PROJECT_ID,
      appwriteApiKey: process.env.APPWRITE_API_KEY, // ⚠️ 若敏感仍建議移到上方
      appwriteDatabaseId: process.env.APPWRITE_DATABASE_ID,
      appwriteCollectionId: process.env.APPWRITE_COLLECTION_ID_ARTICLE,

      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY, // ⚠️ 同上，若公開不安全請往上移

      NHOST_SUBDOMAIN: process.env.NHOST_SUBDOMAIN,
      NHOST_REGION: process.env.NHOST_REGION,

      BACK4APP_APP_ID: process.env.BACK4APP_APP_ID,
      BACK4APP_JS_KEY: process.env.BACK4APP_JS_KEY,
      BACK4APP_SERVER_URL: process.env.BACK4APP_SERVER_URL,
    },
  },
});
