<script setup lang="ts">
import { LinkMention, type PageInfo } from "@lauravivan/notion-portfolio";
import { onBeforeMount, ref, watch } from "vue";
import loadGhData from "@/loadGhData";
import { useRouter } from "vue-router";

const router = useRouter();

const repos = ref<PageInfo[]>();

watch(
  () => router.currentRoute.value.path,
  async (newPath: string) => {
    if (newPath.includes("github")) {
      repos.value = await loadGhData();
    }
  }
);

onBeforeMount(async () => {
  repos.value = await loadGhData();
});
</script>

<template>
  <template v-if="repos && repos.length > 0"
    ><LinkMention
      :page="repo"
      v-for="repo in repos"
      :key="repo.title"
      emoji="🐙"
  /></template>
</template>
