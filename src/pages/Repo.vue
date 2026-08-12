<script setup lang="ts">
import { GH_REPO_URL } from "@/constants";
import loadGhData from "@/loadGhData";
import metadata from "@/metadata";
import {
  Empty,
  Text,
  TextHighlight,
  useStore,
} from "@lauravivan/notion-portfolio";
import { storeToRefs } from "pinia";
import { onBeforeMount, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const store = storeToRefs(useStore);

const desc = ref("");
const gitUrl = ref("");
const projectUrl = ref("");
const starCount = ref(0);
const watchCount = ref(0);
const forkCount = ref(0);

const load = async () => {
  const paramId = route.params.id;

  const id =
    paramId && typeof paramId === "string"
      ? paramId
      : store.getCurrentModalPageId.value;

  if (id) {
    try {
      const res = await fetch(GH_REPO_URL.replace("{repo-name}", id));
      const resJSON = await res.json();

      desc.value = resJSON.description;
      gitUrl.value = resJSON.html_url;
      projectUrl.value = resJSON.homepage;
      starCount.value = resJSON.stargazers_count;
      watchCount.value = resJSON.watchers_count;
      forkCount.value = resJSON.forks_count;

      metadata.pages.repo = {
        ...metadata.pages.repo,
        title: id,
      };
    } catch {}
  }
};

onBeforeMount(async () => {
  await loadGhData();
  load();
});

watch(
  () => route.params.id,
  () => {
    load();
  }
);
</script>

<template>
  <Text>⭐ {{ starCount }} 👁️ {{ watchCount }} 🕸️ {{ forkCount }}</Text>

  <Empty />

  <Text v-if="desc">Description: {{ desc }}</Text>

  <Empty v-if="desc" />

  <Text>
    <TextHighlight>Link github: </TextHighlight>
    {{ gitUrl }}
  </Text>

  <Text v-if="projectUrl">
    <TextHighlight>Link project: </TextHighlight>
    {{ projectUrl }}
  </Text>
</template>
