<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Index Page</h1>

    <h2 class="text-xl font-semibold mt-6 mb-2">Supabase</h2>
    <ul class="list-disc list-inside space-y-1">
      <li v-for="table in supabaseTables" :key="table">
        <a :href="`/api/supabase/${table}`" target="_blank" rel="noopener">
          /api/supabase/{{ table }}
        </a>
      </li>
    </ul>

    <h2 class="text-xl font-semibold mt-6 mb-2">Other Services</h2>
    <ul class="list-disc list-inside space-y-1">
      <li>
        <a href="/api/appwrite/article" target="_blank" rel="noopener"
          >/api/appwrite/article</a
        >
      </li>
      <li>
        <a href="/api/nhost/article" target="_blank" rel="noopener"
          >/api/nhost/article</a
        >
      </li>
      <li>
        <a href="/api/back4app/article" target="_blank" rel="noopener"
          >/api/back4app/article</a
        >
      </li>
      <li>
        <a href="/api/mysql/article" target="_blank" rel="noopener"
          >/api/mysql/article</a
        >
      </li>
      <li>
        <a href="/api/postgres/article" target="_blank" rel="noopener"
          >/api/postgres/article</a
        >
      </li>
      <li>
        <a href="/api/mongo/article" target="_blank" rel="noopener"
          >/api/mongo/article</a
        >
      </li>
      <li>
        <a href="/api/sqlite/article" target="_blank" rel="noopener"
          >/api/sqlite/article</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: supabaseTables } = await useFetch("/api/supabase/tables");
</script>
