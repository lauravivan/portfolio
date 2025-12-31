<script setup lang="ts">
import { Callout, Heading, Image, Text, Empty } from "@lauravivan/notion-portfolio";
</script>

<template>
  <Heading :level="2">Meetup Codecon Ladies</Heading>

  <Callout
    >The Codecon Meetup is an evening event dedicated to discussions on
    technology and programming, featuring two presentations and a networking
    opportunity.

    <Empty/>
    
    We had so far 5 Editions.
    </Callout
  >

  <Heading :level="4">#Second Edition</Heading>
  <Text>Having Giovanna Resende and Letícia Domingues as speakers, talking about international career and IA as code partner</Text>
  <Image src="/meetup-codecon.webp" />

  <Heading :level="4">Certificate from the #First Edition</Heading>
  <Image src="/meetup-codecon-certificate.webp" />
</template>
