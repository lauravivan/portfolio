<script setup lang="ts">
import {
  Text,
  Empty,
  LinkMention,
  Heading,
} from "@lauravivan/notion-portfolio";

const props = defineProps<{
  pageTitle: string;
  about?: string;
  why?: string;
  considerations?: string;
  tddLink?: string;
  hostLink?: string;
}>();
</script>

<template>
  <Heading :level="3" v-if="props.about">About</Heading>

  <Text v-if="props.about">{{ props.about }}</Text>

  <Empty v-if="props.about" />

  <Heading :level="3" v-if="props.why"
    >Reasons to creating this project</Heading
  >
  <Text>{{ props.why }}</Text>

  <Empty v-if="props.why" />

  <Heading :level="3" v-if="props.considerations">Considerations</Heading>

  <Text>{{ props.considerations }}</Text>

  <Empty v-if="props.considerations" />

  <Empty v-if="props.tddLink" />

  <Heading :level="3" v-if="props.tddLink"
    >TDD (Technical Design Document)</Heading
  >

  <LinkMention v-if="props.tddLink" :href="props.tddLink" emoji="📋"
    >Link to TDD</LinkMention
  >

  <Empty v-if="props.tddLink" />

  <Heading v-if="props.hostLink" :level="3">Where you can access</Heading>

  <LinkMention v-if="props.hostLink" :href="props.hostLink" emoji="🧑‍🦯‍➡️">{{
    props.pageTitle
  }}</LinkMention>
</template>
