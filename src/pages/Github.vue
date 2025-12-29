<script setup lang="ts">
import { Database } from "@lauravivan/notion-portfolio";
</script>

<template>
  <Database
    title="My repos"
    layout="gallery"
    :cardPreviewIsCover="true"
    :pages="[]"
  />
</template>