<script setup lang="ts">
import { Text, Link, Heading, Bookmark } from "@lauravivan/notion-portfolio";
</script>

<template>
  <Text>I've created a blog with Astro to gather my writings.</Text>
  <Link :href="`https://blog.arualvivan.com/`">My blog</Link>

  <Heading :level="2">What I've posted so far</Heading>

  <Bookmark
    :link="`https://blog.arualvivan.com/blog/uml-distilled/`"
    :title="`UML distilled, a brief guide to the standard Object Modeling Language`"
  />
</template>
