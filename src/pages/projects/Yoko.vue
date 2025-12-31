<script setup lang="ts">
import {
  Text,
  LinkMention,
  Heading,
  BulletItem,
  BulletList,
} from "@lauravivan/notion-portfolio";
</script>

<template>
  <Heading :level="2">About</Heading>
  <Text
    >In Yoko! you can track the amount of days since you performed an action,
    and also, how many days until a certain event.
  </Text>

  <Heading :level="2">Reasons</Heading>
  <Text
    >I was searching for an app to take track of the countdown of important
    events and despite I found a really good one, I needed to register more than
    it was possible. I thought it would be a good idea for resuming React.js
    studies and create something for my personal use that I was actually
    needing.</Text
  >

  <Heading :level="2">My activities</Heading>

  <BulletList>
    <BulletItem>
      Developed a set of filters to retrieve data based on months
    </BulletItem>
    <BulletItem>
      Developed a set of sorters: by Creation (default), by Color, by Alphabet,
      and by Date
    </BulletItem>
    <BulletItem>
      Developed theme switching (Light and Dark) and layout switching (List and
      Grid)
    </BulletItem>
    <BulletItem>Integrate the project with Zustand, to make it easier to control global state, as this application needs a lot of state management</BulletItem>
    <BulletItem>Integrate the project with react router to switch between countdown page and actions page</BulletItem>
  </BulletList>

  <Heading :level="4">Where you can access</Heading>

  <LinkMention href="https://yoko.arualvivan.com" emoji="🐧">Yoko!</LinkMention>
</template>
