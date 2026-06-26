<script setup lang="ts">
import {
  Text,
  LinkMention,
  Heading,
  BulletList,
  BulletItem
} from "@lauravivan/notion-portfolio";
</script>

<template>
  <Heading :level="2">About</Heading>
  <Text
    >A Notion-based customizable portfolio: with Notion Portfolio you will be
    able to document all your academic and professional journey, building
    dynamic pages based on your needs</Text
  >

  <Heading :level="2">Reasons</Heading>
  <Text
    >In the end of 2023 I found the necessity of having a portfolio to showcase
    everything that I've done and was doing. Previously I faced Nitin
    Ranganath‘s VsCode Portfolio and thought the idea was super interesting and
    refreshing. As I use Notion for a lot of personal, study and work
    organization, I thought Notion would be nice to use as inspiration, because
    of its versatility and freedom of creation</Text
  >

  <Heading :level="2">Notion Portfolio as a package</Heading>
  <Text
    >In October of 2025 I've decided to transform the portfolio into a package,
    so anyone could create their own Notion Portfolio. Also, I find the need of
    separating personal information from the codebase</Text
  >
  <Text>This showed to be an interesting experience, where I learned more about the construction of packages, and a total different structure from traditional web projects that I was used to</Text>

  <Heading :level="2">My activities</Heading>
  <BulletList>
    <BulletItem> Developed a set of Notion components </BulletItem>
    <BulletItem>
      Created all the documentation needed to guide users in their first
      experience with Notion Portfolio, helping them build their first page with
      no problems
    </BulletItem>
    <BulletItem>
      Integrated Vue.js with Vue Router, creating dynamic routing based on the
      pages the user will build
    </BulletItem>
    <BulletItem>
      Integrated Vue.js with Pinia to help handle the application’s global state
    </BulletItem>
    <BulletItem>
      Developed a base template with a dynamic aside and nested links, based on
      the pages that will be created
    </BulletItem>
    <BulletItem>
      Developed a menu where page settings can be dynamically configured,
      allowing viewers to change width, font family, and font size of any
      available page
    </BulletItem>
    <BulletItem>
      Developed global settings that allow users to change the Notion Portfolio
      theme (Light, Dark, Cat Latte, and Cat Mocha)
    </BulletItem>
    <BulletItem>
      Created developer documentation to facilitate understanding of the
      development process
    </BulletItem>
    <BulletItem
      >Configured all the enviroment to build a functional Vue package,
      integrating with EsLint, Prettier and Husky. Also using semantic release
      lib with Github Actions to automate the control of version and
      publication flow</BulletItem
    >
  </BulletList>

  <Heading :level="4">Demo</Heading>

  <LinkMention href="https://notionportfolio.arualvivan.com" emoji="🍃"
    >Notion Portfolio</LinkMention
  >

  <Heading :level="4">Documentation</Heading>
  
   <LinkMention href="http://notionportfolio-docs.arualvivan.com" emoji="🍃"
    >Dev and client documentation</LinkMention
  >
</template>
