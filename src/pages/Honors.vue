<script setup lang="ts">
import { Divider, Empty, Heading, Text } from "@lauravivan/notion-portfolio";
</script>

<template>
  <Empty />
  <Heading :level="3"> Outstanding Student</Heading>
  <p>Programa Meninas Digitais</p>
  <Empty />
  <Text
    >Award from the Digital Girls Program and the Brazilian Computer Society,
    certifying the completion of a Bachelor's degree in Information Systems at
    IFSC – Caçador, as the Outstanding Student of the 2025/1 graduating
    class.</Text
  >
  <Empty />
  <!-- <Image src="/certificate-student.webp" /> -->
  <Empty />

  <Divider />
  <Empty />

  <Heading :level="3"
    >2nd place in the 1st Big Data & Data Analytics Datathon (2025/1)</Heading
  >
  <p>IFSC</p>
  <Empty />

  <Text
    >The theme of the competition was Sentiment Analysis, and it lasted for two
    weeks.
  </Text>
  <Empty />
  <!-- <Image src="/certificate-datathon.webp" /> -->
</template>
