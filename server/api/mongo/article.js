import { MongoClient } from "mongodb";

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  const client = new MongoClient(config.DB_MONGO_URI);

  try {
    await client.connect();

    const db = client.db(config.DB_MONGO_NAME);
    const collection = db.collection("article");

    const articles = await collection.find({}).toArray();

    return articles;
  } catch (err) {
    console.error("[MONGODB] QUERY ERROR:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "FAILED TO QUERY MONGODB",
    });
  } finally {
    await client.close();
  }
});
