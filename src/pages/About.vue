<script setup lang="ts">
import {
  Callout,
  BulletList,
  BulletItem,
  Divider,
  Text,
  Empty,
  Heading,
  LinkMention,
} from "@lauravivan/notion-portfolio";
</script>

<template>
  <Text
    >My name is Laura, and I'm a passionate Web developer building end to end
    web applications. Here in my portfolio you can access my projects and
    achievments.
  </Text>

  <Text>
    I have a strong foundation in Front-End development and a growing interest
    in becoming a well-rounded Full Stack Web Developer. I hold a degree in
    Information Systems from the Instituto Federal de Santa Catarina (IFSC),
    where I had the opportunity to work on projects that combined technology
    with real-world challenges. One of these experiences was a university
    extension project focused on developing a web application with Django to
    automate the triage process in health centers and hospitals.
  </Text>

  <Text
    >But I also made one year of Computer Science at Universidade Regional de
    Blumenau (FURB), where I discovered a taste for logic, programming and
    databases. My first high level programming language was Java.</Text
  >

  <Text>
    Throughout my journey, I've also worked on projects with a strong focus on
    accessibility and social impact. I developed AcessiWeb, a web system
    designed to make WCAG accessibility guidelines easier to understand while
    implementing some of these practices directly into the application to
    improve the experience for users with different accessibility needs. Later,
    I joined Lacrei Saúde, a social-impact health tech that connects the
    LGBTQIAPN+ community with inclusive and qualified healthcare professionals,
    where I grew as a developer and eventually took on the role of Front-End
    Tech Lead.
  </Text>

  <Text>
    My professional experience also includes working as a contractor on a
    payment management system that helps companies manage partners, services,
    and charges while processing payments to multiple partners through a single
    transaction. The system integrates with a payment API and gave me valuable
    experience building solutions around real business needs. I also contributed
    to Estudos Arquivados, a project that uses the arquivo.pt API to help
    Portuguese students find relevant academic content based on their school
    year and subjects. The project also leverages OpenAI's LLM to identify
    related words and expressions from user input, improving the accuracy of the
    search filters.
  </Text>

  <Text>
    Outside of professional projects, I enjoy experimenting and learning through
    side projects such as Notion-portfolio, Yoko!, and Koda. These projects
    allow me to explore new ideas, technologies, and approaches while continuing
    to grow as a developer. Overall, I'm driven by curiosity and a desire to
    build useful, accessible, and well-crafted web experiences—and I'm excited
    to keep expanding my skills toward becoming a great Full Stack Web
    Developer.
  </Text>

  <Empty />

  <Callout>What my goals are?</Callout>
  <BulletList
    ><BulletItem
      >Improve even further the necessary habilities to create great web
      applications</BulletItem
    ><BulletItem>Web development (full-stack) mid-level</BulletItem></BulletList
  >

  <Empty />

  <Divider />

  <Heading :level="3">Resume/CV</Heading>

  <Empty />

  <LinkMention href="/cv-LauraVivan.pdf" emoji="👋"
    >Access my resume in Portuguese</LinkMention
  >

  <LinkMention href="/cv-en-LauraVivan.pdf" emoji="👋"
    >Access my resume in English</LinkMention
  >
</template>
