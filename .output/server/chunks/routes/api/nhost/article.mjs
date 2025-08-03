import { c as defineEventHandler, u as useRuntimeConfig, e as createError } from '../../../_/nitro.mjs';
import { NhostClient } from '@nhost/nhost-js';
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
  const subdomain = config.public.NHOST_SUBDOMAIN;
  const region = config.public.NHOST_REGION;
  if (!subdomain || !region) {
    throw createError({
      statusCode: 500,
      statusMessage: "Missing Nhost subdomain or region environment variables"
    });
  }
  const nhost = new NhostClient({ subdomain, region });
  try {
    const query = `
      query {
        article {
          id
          title
          content
          new_date
          url1
          file1
          file1type
          created_at
          updated_at
        }
      }
    `;
    const { data, error } = await nhost.graphql.request(query);
    if (error) {
      throw createError({
        statusCode: 500,
        statusMessage: error.message || "GraphQL error"
      });
    }
    return data.article;
  } catch (e) {
    throw createError({
      statusCode: 500,
      statusMessage: e.message || "Unknown error occurred"
    });
  }
});

export { article as default };
//# sourceMappingURL=article.mjs.map
