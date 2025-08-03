// server/api/supabase/[table].js

const ALLOWED_TABLES = new Set([
  "article",
  "bank",
  "cloud",
  "experience",
  "food",
  "host",
  "inventory",
  "mail",
  "member",
  "routine",
  "subscription",
  "video",
]);

import { createClient } from "@supabase/supabase-js";
import { defineEventHandler, createError, getQuery } from "h3";

export default defineEventHandler(async (event) => {
  const table = event.context.params?.table;

  if (!ALLOWED_TABLES.has(table)) {
    throw createError({ statusCode: 400, statusMessage: "Table not allowed" });
  }

  const config = useRuntimeConfig();
  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseKey
  );

  const { data, error } = await supabase
    .from(table)
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }

  return data;
});
