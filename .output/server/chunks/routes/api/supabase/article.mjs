import { c as defineEventHandler, u as useRuntimeConfig, e as createError } from '../../../_/nitro.mjs';
import { createClient } from '@supabase/supabase-js';
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
  const supabaseUrl = config.public.supabaseUrl;
  const supabaseKey = config.public.supabaseKey;
  if (!supabaseUrl || !supabaseKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "Missing SUPABASE_URL or SUPABASE_KEY"
    });
  }
  const supabase = createClient(supabaseUrl, supabaseKey);
  const { data, error } = await supabase.from("article").select("*").order("created_at", { ascending: false });
  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    });
  }
  return data;
});

export { article as default };
//# sourceMappingURL=article.mjs.map
