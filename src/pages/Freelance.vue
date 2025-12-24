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
  <Empty />
  <Heading :level="2">Estudos Arquivados</Heading>
  <Callout>Contract Full-Stack Developer</Callout>
  <Text
    >Development of a platform to filter content from arquivo.pt, focusing on
    the education of students in Portugal. Utilized an LLM to generate context
    based on the students’ grade level and subject, as well as keywords for more
    precise searches.</Text
  >
  <LinkMention target="" emoji="🎓" href="https://estudosarquivados.pt/"
    >Plataform access</LinkMention
  >
  <Empty />
  <BulletList>
    <BulletItem>Set up the Firebase environment</BulletItem>
    <BulletItem
      >Implemented Bearer/Refresh token authentication using
      Firebase</BulletItem
    >
    <BulletItem
      >Created a REST API using Express.js, TypeScript, Cloud Functions, and
      Firestore</BulletItem
    >
    <BulletItem
      >Utilized an LLM to contextualize search queries and generate keywords for
      improved filtering with the Arquivo.pt API</BulletItem
    >
    <BulletItem
      >Implemented pagination on the frontend with cached responses to improve
      response times, and added logic to handle unstable API
      responses</BulletItem
    >
    <BulletItem
      >Developed PDF generation using Puppeteer and AWS Chromium integrated with
      Cloud Functions, preserving formatting such as styles, fonts, and
      images</BulletItem
    >
    <BulletItem
      >Developed DOCX generation using Cheerio and custom text
      formatting</BulletItem
    >
    <BulletItem
      >Created a search history system that allows users to save queries and
      access them later without reloading the context and keywords</BulletItem
    >
    <BulletItem>Used Zod to validate data sent to API routes</BulletItem>
    <BulletItem>Implemented web components to reuse HTML structures</BulletItem>
    <BulletItem
      >Implemented dynamic URLs with parameters that update as search queries
      change, both on the main screen and the results page</BulletItem
    >
  </BulletList>
  <Empty />
  <Text>Time I spend in this project: Feb 2025 - May 2025</Text>
  <Empty />
  <Heading :level="2">Lyva</Heading>
  <Callout>Contract Full-Stack Developer</Callout>
  <Text
    >A web-based system for splitting payments between partners. This solution
    allows companies to use the platform to manage partners, services, and
    billing, enabling multiple payments to different parties in a single
    transaction. To achieve this, the system integrates with a payment
    API.</Text
  >
  <Empty />
  <BulletList>
    <BulletItem
      >Developed a Single Page Application (SPA) using React.js and
      Vite</BulletItem
    >
    <BulletItem>Used Tailwind CSS for styling</BulletItem>
    <BulletItem
      >Handled form validation and submission using Yup and Formik on the
      frontend</BulletItem
    >
    <BulletItem
      >Built a REST API using Nest.js, Cloud Functions, Firestore, and
      TypeScript</BulletItem
    >
    <BulletItem
      >Integrated an external API via Webhooks for scheduled event
      management</BulletItem
    >
    <BulletItem
      >Implemented Ngrok to enable local API communication with the external
      API</BulletItem
    >
    <BulletItem
      >Configured email sending with Nodemailer and Google OAuth2
      authentication</BulletItem
    >
    <BulletItem
      >Created modules for users, partners, patients, services, subscriptions,
      financial management, and reporting</BulletItem
    >
    <BulletItem
      >Enhanced security using bcrypt and Node.js crypto module, and implemented
      Bearer/Refresh token authentication with Firebase</BulletItem
    >
    <BulletItem
      >Optimized performance with Firestore function listeners, reducing
      response time from 8 seconds to milliseconds</BulletItem
    >
  </BulletList>
  <Empty />
  <Text>Time I spend in this project: Oct/Nov 2024 - May 2025</Text>
</template>
