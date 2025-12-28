<script setup lang="ts">
import {
  Divider,
  Empty,
  Text,
  LinkMention,
  Columns,
  Image,
  TextHighlight,
  Column
} from "@lauravivan/notion-portfolio";
</script>

<template>
  <Empty />

  <Columns :number-of-columns="2" :col1Size="10" :col2Size="90">
    <Column>
      <Image src="/ebac.png" />
    </Column>
    <Column>
      <Text>Desenvolvimento Front-End do Zero ao Pro</Text>
      <TextHighlight>EBAC - Marcelo Cavalcanti</TextHighlight>
      <Text>Credential ID 11956-70519-75448-83098</Text>
      <Text>2021 - 2023</Text>
      <LinkMention
        emoji="🎓"
        href="https://static.lms.ebaconline.com.br/certs/115b328c-e890-4879-a789-622e2b59f84d.pdf"
        >Certificate of Completion</LinkMention
      >
    </Column>
  </Columns>

  <Empty />

  <TextHighlight>About:</TextHighlight>

  <Text>
    A very focused course on the basis of frontend (fundamentals), not attached
    by any specific framework. It covered HTML, CSS and JavaScript and tools to
    work in frontend.</Text
  >

  <Empty />

  <TextHighlight>Reasons I decided to take it:</TextHighlight>

  <Text>
    I decided to go to a free EBAC Webinar about CSS and coorelated stuff. There
    I was presented to this course and as I was already very excited with web
    development and had just initial contact with it, it looked like a nice deal
    for me.</Text
  >

  <Empty/>

  <Divider />

  <Empty />

  <Columns :number-of-columns="2" :col1Size="10" :col2Size="90">
    <Column>
      <Image src="/udemy.png" />
    </Column>
    <Column>
      <Text>JavaScript Unit Testing - The Practical Guide</Text>
      <TextHighlight>Udemy - Maximilian Schwarzmüller</TextHighlight>
      <Text>Credential ID UC-3efc1286-ed24-496e-8939-a95f8c35e4cb</Text>
      <Text>2024</Text>
      <LinkMention
        emoji="🎓"
        href="https://www.udemy.com/certificate/UC-3efc1286-ed24-496e-8939-a95f8c35e4cb/"
        >Certificate of Completion</LinkMention
      >
    </Column>
  </Columns>

  <Empty />

  <TextHighlight>About:</TextHighlight>

  <Text>
    In the course Max teaches about the automation of unit and integration
    testing with Vitest in JavaScript enviroment. It covered basics, how to
    write good tests, advanced testing concepts, mocking and spies, and
    further.</Text
  >

  <Empty />

  <TextHighlight>Reasons I decided to take it:</TextHighlight>

  <Text>
    I was very excited about the way Max teaches and I was wanting to have a
    background with testing automation.
  </Text>

  <Empty/>

  <Divider />

  <Empty />

  <Columns :number-of-columns="2" :col1Size="10" :col2Size="90">
    <Column>
      <Image src="/curso-em-video.webp" />
    </Column>
    <Column>
      <Text>PYTHON 3 - MUNDOS 1, 2, 3</Text>
      <TextHighlight>Curso em vídeo - Gustavo Guanabara</TextHighlight>
      <Text>Credential ID UC-3efc1286-ed24-496e-8939-a95f8c35e4cb</Text>
      <Text>2021</Text>
      <LinkMention
        emoji="🎓"
        href="https://www.cursoemvideo.com/validacao-de-certificado/"
        >Certificate of Completion Mundo 1 - ID 4986E-66E2-5</LinkMention
      >
      <LinkMention
        emoji="🎓"
        href="https://www.cursoemvideo.com/validacao-de-certificado/"
        >Certificate of Completion Mundo 2 - ID 4986E-67AC-2</LinkMention
      >
      <LinkMention
        emoji="🎓"
        href="https://www.cursoemvideo.com/validacao-de-certificado/"
        >Certificate of Completion Mundo 3 - ID 4986E-685A-7</LinkMention
      >
    </Column>
  </Columns>

  <Empty />

  <TextHighlight>About:</TextHighlight>

  <Text>
    A free Python course. The first world covered the fundamentals, the second
    covered control structures and the third composite structures.</Text
  >

  <Empty />

  <TextHighlight>Reasons I decided to take it:</TextHighlight>

  <Text>
    I was asked to learn about Python and Django enviroment when I first entered
    in a scholarship in College. So, I dove deep into Python for a month before
    starting it. At the time, as I was alreading watching some videos from
    professor Guanabara, It was my first choice.</Text
  >
</template>
