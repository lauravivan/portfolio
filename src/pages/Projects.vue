<script setup lang="ts">
import { Database, type PageInfo } from "@lauravivan/notion-portfolio";
import metadata from "@/metadata";

const pages = metadata.pages;
const projects = Object.values(pages).filter((p: PageInfo) => p.parentPage && p.parentPage === 'projects');
</script>

<template>
  <Database
    title="My projects"
    layout="gallery"
    :cardPreviewIsCover="true"
    :pages="projects"
  />
</template>
