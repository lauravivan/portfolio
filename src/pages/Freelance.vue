<script setup lang="ts">
import {
  Text,
  Heading,
  Empty,
  BulletList,
  BulletItem,
  LinkMention,
  Callout,
} from "@lauravivan/notion-portfolio";
</script>

<template>
  <Empty/>
  <Heading :level="2">Lyva & Estudos Arquivados</Heading>

  <Callout>Contract Full-Stack Developer</Callout>

  <Text
    >Lyva: A web-based system for splitting payments between partners. This
    solution allows companies to use the platform to manage partners, services,
    and billing, enabling multiple payments to different parties in a single
    transaction. To achieve this, the system integrates with a payment
    API.</Text
  >

  <Text
    >Estudos Arquivados: Development of a platform to filter content from
    arquivo.pt, focusing on the education of students in Portugal. Utilized an
    LLM to generate context based on the students’ grade level and subject, as
    well as keywords for more precise searches.</Text
  >

  <LinkMention target="" emoji="🎓" href="https://estudosarquivados.pt/"
    >Plataform access</LinkMention
  >

  <Empty />

  <BulletList>
    <BulletItem>
      Develop and maintain Lyva frontend and serverless backend
    </BulletItem>

    <BulletItem>
      Integrate Lyva API with external Asaas API via Webhooks
    </BulletItem>

    <BulletItem> Configure email sending in Lyva API </BulletItem>

    <BulletItem>
      Optimize Lyva performance with Firestore function listeners, reducing
      response time from 8 sec to milliseconds
    </BulletItem>

    <BulletItem>
      Introduce LLM in Estudos Arquivados API to contextualize search queries
      and generate keywords for improved filtering with the Arquivo.pt API
    </BulletItem>

    <BulletItem>
      Implement Estudos Arquivados frontend pagination with cached responses to
      improve response time, adding logic to handle unstable API responses
    </BulletItem>

    <BulletItem>
      Develop PDF generation using Puppeteer and AWS Chromium integrated with
      Cloud Functions, preserving formatting such as styles, fonts, and images.
      And DOCX generation using Cheerio and custom text formatting for
      downloading Arquivo.pt API content
    </BulletItem>

    <BulletItem>
      Develop a search history system for Estudos Arquivados that allows users
      to save queries and access them later without reloading the context and
      keywords
    </BulletItem>

    <BulletItem>
      Develop web components to reuse HTML structures in Estudos Arquivados
    </BulletItem>

    <BulletItem>
      Implement dynamic URLs with parameters that update as search queries
      change, both on the main screen and the results page of Estudos Arquivados
      frontend
    </BulletItem>
  </BulletList>

  <Empty />

  <Text>Time I spend in Estudos Arquivados: Feb 2025 - May 2025</Text>

  <Text>Time I spend in Lyva: Oct/Nov 2024 - May 2025</Text>
</template>
