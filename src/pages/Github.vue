<script setup lang="ts">
import { Database } from "@lauravivan/notion-portfolio";
import Repo from "@/pages/Repo.vue";
</script>

<template>
  <Database
    title="My repos"
    layout="gallery"
    :cardPreviewIsCover="true"
    :component="Repo"
    :pages="[]"
  />
</template>