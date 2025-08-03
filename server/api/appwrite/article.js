import { Client, Databases } from "appwrite";
import { defineEventHandler, createError } from "h3";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const client = new Client()
    .setEndpoint(config.public.appwriteEndpoint)
    .setProject(config.public.appwriteProjectId);

  const databases = new Databases(client);

  if (event.req.method !== "GET") {
    throw createError({ statusCode: 405, statusMessage: "Method Not Allowed" });
  }

  try {
    const response = await databases.listDocuments(
      config.public.appwriteDatabaseId,
      config.public.appwriteCollectionId
    );
    return response.documents;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message || "Unknown error",
    });
  }
});
