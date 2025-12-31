<script setup lang="ts">
import { GH_REPOS_URL } from "@/constants";
import metadata from "@/metadata";
import { Database, type PageInfo } from "@lauravivan/notion-portfolio";
import { onBeforeMount, ref } from "vue";

const pages = ref<PageInfo[]>([]);

interface RepoInfo { name: string, createdAt : string }

onBeforeMount(async () => {
  try {
    const res = await fetch(GH_REPOS_URL);
    const resJSON = await res.json();

    const repos: RepoInfo[] = resJSON
      .map((repo: {}) => {
        const repoInfo = {} as RepoInfo;

        if ("name" in repo && typeof repo.name === "string") {
          repoInfo.name = repo.name;
        }

         if ("created_at" in repo && typeof repo.created_at === "string") {
          repoInfo.createdAt = new Date(repo.created_at).toDateString();
        }

        return repoInfo;
      })
      .filter(Boolean);

    pages.value = Array.from({ length: 10 }, (_v, i) => ({
      ...metadata.pages["repo"],
      path: metadata.pages["repo"].path.replace(":id", repos[i]?.name),
      title: repos[i]?.name,
      databaseInfo: {
        Created: {
          icon: "clock",
          value: repos[i]?.createdAt,
        },
      },
    }));
  } catch {}
});
</script>

<template>
  <Database
    title="My repos"
    layout="gallery"
    :cardPreviewIsCover="false"
    :pages="pages"
  />
</template>
