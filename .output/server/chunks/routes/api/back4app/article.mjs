import { c as defineEventHandler, u as useRuntimeConfig, e as createError } from '../../../_/nitro.mjs';
import Parse from 'parse/node.js';
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
  const appId = config.public.BACK4APP_APP_ID;
  const jsKey = config.public.BACK4APP_JS_KEY;
  const serverURL = config.public.BACK4APP_SERVER_URL;
  if (!appId || !jsKey || !serverURL) {
    throw createError({
      statusCode: 500,
      statusMessage: "Missing Back4App environment variables"
    });
  }
  Parse.initialize(appId, jsKey);
  Parse.serverURL = serverURL;
  try {
    const Article = Parse.Object.extend("article");
    const query = new Parse.Query(Article);
    const results = await query.find();
    const articles = results.map((item) => {
      const file1 = item.get("file1");
      return {
        id: item.id,
        title: item.get("title"),
        content: item.get("content"),
        new_date: item.get("new_date"),
        url1: item.get("url1"),
        file1: file1 && typeof file1.url === "function" ? file1.url() : null,
        file1type: item.get("file1type"),
        created_at: item.createdAt,
        updated_at: item.updatedAt
      };
    });
    return articles;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message || "Failed to fetch articles"
    });
  }
});

export { article as default };
//# sourceMappingURL=article.mjs.map
