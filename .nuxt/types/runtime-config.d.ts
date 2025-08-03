import { RuntimeConfig as UserRuntimeConfig, PublicRuntimeConfig as UserPublicRuntimeConfig } from 'nuxt/schema'
  interface SharedRuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   DB_MYSQL_HOST: string,

   DB_MYSQL_PORT: string,

   DB_MYSQL_USER: string,

   DB_MYSQL_PASSWORD: string,

   DB_MYSQL_NAME: string,

   DB_PG_HOST: string,

   DB_PG_PORT: string,

   DB_PG_USER: string,

   DB_PG_PASSWORD: string,

   DB_PG_NAME: string,

   DB_MONGO_URI: string,

   DB_MONGO_NAME: string,

   SQLITE_CLOUD_URL: string,

   nitro: {
      envPrefix: string,
   },
  }
  interface SharedPublicRuntimeConfig {
   appwriteEndpoint: string,

   appwriteProjectId: string,

   appwriteApiKey: string,

   appwriteDatabaseId: string,

   appwriteCollectionId: string,

   supabaseUrl: string,

   supabaseKey: string,

   NHOST_SUBDOMAIN: string,

   NHOST_REGION: string,

   BACK4APP_APP_ID: string,

   BACK4APP_JS_KEY: string,

   BACK4APP_SERVER_URL: string,
  }
declare module '@nuxt/schema' {
  interface RuntimeConfig extends UserRuntimeConfig {}
  interface PublicRuntimeConfig extends UserPublicRuntimeConfig {}
}
declare module 'nuxt/schema' {
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: UserRuntimeConfig
        }
      }