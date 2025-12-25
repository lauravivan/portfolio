<script setup lang="ts">
import { Database, type PageInfo } from "@lauravivan/notion-portfolio";
import metadata from "@/metadata";
import NotionPortfolio from "./NotionPortfolio.vue";

const pages = metadata.pages;
const projects = pages.filter((p: PageInfo) => p.parentPage && p.parentPage.id === 'projects');
</script>

<template>
  <Database
    title="My projects"
    layout="gallery"
    :cardPreviewIsCover="true"
    :component="NotionPortfolio"
    :pages="projects"
  />
</template>
