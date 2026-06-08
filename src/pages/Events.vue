<script setup lang="ts">
import { Callout, Heading, Image, Text } from "@lauravivan/notion-portfolio";
</script>

<template>
  <Heading :level="2">Meetup Codecon Ladies</Heading>

  <Callout
    >The Codecon Meetup is an evening event dedicated to discussions on
    technology and programming, featuring two presentations and a networking
    opportunity.
  </Callout>

  <Heading :level="3">Certificate from the #First Edition</Heading>
  <Image src="/meetup-codecon-certificate.webp" />

  <Heading :level="3">#Second Edition</Heading>
  <Text
    >Having Giovanna Resende and Letícia Domingues as speakers, talking about
    international career and AI as code partner</Text
  >
  <Image src="/meetup-codecon.webp" />
</template>
