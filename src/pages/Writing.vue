<script setup lang="ts">
import { Bookmark, Heading } from "@lauravivan/notion-portfolio";
</script>

<template>
  <Heading :level="2">2026</Heading>
  <Heading :level="3">Aug</Heading>

  <Bookmark
    :title="'Every engineer is also a writer'"
    :link="'https://koda.arualvivan.com/blog/blog-post/every%E2%80%93engineer-is-a-writer'"
  />

  <Heading :level="2">2025</Heading>
  <Heading :level="3">Jun</Heading>

  <Bookmark
    :title="'UML distilled, a brief guide to the standard Object Modeling Language: Class Diagram'"
    :link="'https://koda.arualvivan.com/blog/blog-post/class-diagram-uml-distilled'"
  />
</template>
