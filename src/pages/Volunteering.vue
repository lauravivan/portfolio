<script setup lang="ts">
import {
  Heading,
  LinkMention,
  Text,
  TextHighlight,
  BulletItem,
  BulletList,
  Callout,
  Empty
} from "@lauravivan/notion-portfolio";
</script>

<template>
  <Heading :level="2">Volunteer Front-End Developer at Lacrei Saúde</Heading>

  <Text><TextHighlight>October 2025 - current</TextHighlight></Text>

  <Callout
    >Lacrei Saúde is a social-impact health tech connecting the LGBTQIAPN+
    community with inclusive, qualified healthcare professionals.

    <Empty/>

    In Lacrei Front-end team we work with a Design System called Marsha (in honor to Marhsa P. Johnson), accessibility standards, agile rituals, living documentation and peer review.
    
    <Empty/>

    As being remote-first we have very diverse teams, from different regions across Latin America and abroad, where we teach, learn and deliver value continuously. 
  </Callout>

  <LinkMention href="https://lacreisaude.com.br/" emoji="🩺"
    >Lacrei Saúde</LinkMention
  >

  <Heading :level="3">My activities</Heading>

  <BulletList>
    <BulletItem>
      Developed a Date Picker from scratch using the date-fns library
    </BulletItem>
    <BulletItem>
      Implemented unit and integration tests, increasing coverage to nearly 100%
    </BulletItem>
    <BulletItem>
      Improved ProgressBar responsiveness and fixed layout breaks by
      implementing a new component strategy
    </BulletItem>
    <BulletItem>
      Enhanced accessibility across components and interfaces
    </BulletItem>
    <BulletItem>
      Created logic to handle synchronization and rendering of multiple Toast
      components simultaneously
    </BulletItem>
    <BulletItem>
      Collaborated with cross-functional teams (Back-End, QA, UI/UX Design,
      Product Owner, and DevOps)
    </BulletItem>
    <BulletItem>
      Delivered features following the SCRUM methodology, with weekly alignment
      and review meetings
    </BulletItem>
    <BulletItem>
      Refactored components and entire UI flows (User Flow mapping, handoff, and
      API integration), improving code organization, separation of concerns, and
      long-term maintainability
    </BulletItem>
    <BulletItem>
      Assisted with reports and fixed bugs identified by the QA team
    </BulletItem>
    <BulletItem>
      Aligned SearchBar variants with the Design System, delivering a more
      consistent component
    </BulletItem>
    <BulletItem>
      Mapped user flows and API responses to deliver service modalities and
      payment types aligned with business logic, significantly improving user
      experience
    </BulletItem>
  </BulletList>

  <Heading :level=3>What I have been posting about 👀</Heading>
  <LinkMention href="https://www.linkedin.com/posts/vivan-laura_nessas-3-primeiras-semanas-na-lacrei-sa%C3%BAde-activity-7394051440731897856-IrCB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADX84MQBnYNXkczEEYqwYnJhfjEPtq-FhEY" emoji="🩺">First month</LinkMention>
  <LinkMention href="https://www.linkedin.com/posts/vivan-laura_nesse-segundo-m%C3%AAs-na-lacrei-sa%C3%BAde-tive-a-activity-7404561791726608384-UBFp?utm_source=share&utm_medium=member_desktop&rcm=ACoAADX84MQBnYNXkczEEYqwYnJhfjEPtq-FhEY" emoji="🩺">Second month</LinkMention>
</template>
