<script setup lang="ts">
import {
  Callout,
  Heading,
  Image,
  Text,
  Link,
  Empty,
  Columns,
  Column,
} from "@lauravivan/notion-portfolio";
</script>

<template>
  <Heading :level="1">Codecon</Heading>

  <Heading :level="2">Meetup Codecon Ladies</Heading>

  <Callout
    >Codecon Meetup is an evening event dedicated to discussions on technology
    and programming, featuring two presentations and a networking opportunity.
  </Callout>

  <Heading :level="3">Certificate from the #First Edition</Heading>
  <Image src="/meetup-codecon-certificate.webp" />

  <Heading :level="3">#Second Edition</Heading>
  <Text
    >Having Giovanna Resende and Letícia Domingues as speakers, talking about
    international career and AI as code partner</Text
  >
  <Image src="/meetup-codecon.webp" />

  <Heading :level="2">Codecon Summit</Heading>

  <Callout
    >Codecon Summit is one of the biggest technology and software development
    festival that blends technical learning, career growth, and entertainment
    for programmers.
  </Callout>

  <Columns :number-of-columns="2">
    <Column> <Image src="/codecon-summit-panel.webp" /></Column>
    <Column> <Image src="/guanabara-codecon-summit.webp" /></Column>
  </Columns>

  <Empty />

  <Link href="./codecon-summit-2026.pdf"
    >Certificate from Codecon Summit &apos;26</Link
  >
</template>
