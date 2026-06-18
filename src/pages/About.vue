<script setup lang="ts">
import {
  Callout,
  Columns,
  BulletList,
  BulletItem,
  Divider,
  Text,
  ToDoList,
  ToDoItem,
  Empty,
  Heading,
  LinkMention,
  TextHighlight,
  Column,
  Link
} from "@lauravivan/notion-portfolio";
</script>

<template>
  <Text>Hey there 👋!</Text>
  
  <Text
    >My name is Laura, and I'm a passionate Web developer building end to end
    web applications. Here in my portfolio you can access my projects and
    achievments.
  </Text>

  <Empty/>
  <Columns :number-of-columns="3">
    <Column>
      <Callout>Education...</Callout>
      <BulletList>
        <BulletItem>
          I made a year of Computer Science at Universidade Regional de Blumenau
          (FURB) before migrating to IS in another city. In my first year having
          contact with this world I discovered a taste for logic, programming
          and databases. My first high level programming language was Java and
          continued after I moved on from institution.
        </BulletItem>
        <BulletItem
          >Information Systems graduate at Instituto Federal de Santa Catarina
          (IFSC).</BulletItem
        >
      </BulletList>
    </Column>

    <Column>
      <Callout>Projects...</Callout>
      <BulletList>
        <BulletItem>
          I was two times scholarship holder in University-Funded Extension
          Program. I helped to develop a web system for risk classification
          using Django Framework. Also, I develop an accessible system to
          reunite accessibility guidelines helping developers and interested
          people to build more accessible platforms.
        </BulletItem>
        <BulletItem
          >As a freelancer I helped to build a platform to be used by Portuguese
          students in filtering content on <Link href="http://arquivo.pt/">arquivo.pt</Link> API.
          This project also uses LLM to help creating context and keywords to
          help with more assertive research.
        </BulletItem>
        <BulletItem
          >Still, as freelancer, I developed from scratch a web system to help
          payment splitting between health professionals. The platform
          communicates with an external payment API.</BulletItem
        ></BulletList
      >
    </Column>

    <Column>
      <Callout>Goals...</Callout>
      <BulletList
        ><BulletItem
          >Improve even further the necessary habilities to create great web
          applications</BulletItem
        ><BulletItem
          >Web development (full-stack) mid-level</BulletItem
        ></BulletList
      >
    </Column>
  </Columns>

  <Empty />

  <Divider />

  <Heading :level="3">Resume/CV</Heading>

  <Empty />

  <LinkMention
    href="https://docs.google.com/document/d/1ZxWvOuzFilptDO9jme-KYIWj6EqhW9Ws-hQFZl-PhIY/edit?usp=sharing"
    emoji="👋"
    >Access my resume in Portuguese</LinkMention
  >

  <LinkMention
    href=""
    emoji="👋"
    >Access my resume in English (in progress...)</LinkMention
  >

  <Empty />

  <Divider />

  <Heading :level="3">Technologies</Heading>

  <Text
    >What I had/have contact with will be checked, things that I want start
    having contact with and to dive deep will be unchecked</Text
  >

  <Empty />

  <Columns :number-of-columns="5">
    <Column>
      <TextHighlight>Programming Languages</TextHighlight>
      <ToDoList>
        <ToDoItem :is-checked="true">JavaScript</ToDoItem>
        <ToDoItem :is-checked="true">TypeScript</ToDoItem>
        <ToDoItem :is-checked="true">Java</ToDoItem>
        <ToDoItem :is-checked="true">Python</ToDoItem>
      </ToDoList>
      <Empty />
      <TextHighlight>Devops & Cloud</TextHighlight>
      <ToDoList>
        <ToDoItem :is-checked="true">Docker</ToDoItem>
        <ToDoItem>Kubernetes</ToDoItem>
        <ToDoItem>AWS</ToDoItem>
        <ToDoItem>Azure</ToDoItem>
        <ToDoItem :is-checked="true"
          >Google Cloud: cloud functions, firebase</ToDoItem
        >
        <ToDoItem :is-checked="true">Github Actions</ToDoItem>
      </ToDoList>
    </Column>
    <Column>
      <TextHighlight>Building APIs</TextHighlight>
      <ToDoList>
        <ToDoItem :is-checked="true">Express.js</ToDoItem>
        <ToDoItem :is-checked="true">Node.js</ToDoItem>
        <ToDoItem :is-checked="true">Nest.js</ToDoItem>
        <ToDoItem>Swagger</ToDoItem>
        <ToDoItem :is-checked="true">Postman</ToDoItem>
        <ToDoItem :is-checked="true">Insomnia</ToDoItem>
        <ToDoItem :is-checked="true">Yaak</ToDoItem>
        <ToDoItem :is-checked="true">ReDoc</ToDoItem>
      </ToDoList>
      <Empty />
      <TextHighlight>CLI tools</TextHighlight>
      <ToDoList>
        <ToDoItem :is-checked="true">Git</ToDoItem>
        <ToDoItem :is-checked="true">Curl</ToDoItem>
      </ToDoList>
      <Empty />
    </Column>
    <Column>
      <TextHighlight>Building UIs</TextHighlight>
      <ToDoList>
        <ToDoItem :is-checked="true">React.js</ToDoItem>
        <ToDoItem :is-checked="true">Vue.js</ToDoItem>
        <ToDoItem :is-checked="true">Next.js</ToDoItem>
        <ToDoItem :is-checked="true">TanStack Query</ToDoItem>
        <ToDoItem :is-checked="true">React Hook Form</ToDoItem>
        <ToDoItem :is-checked="true">React Router</ToDoItem>
        <ToDoItem :is-checked="true">Vuex</ToDoItem>
        <ToDoItem :is-checked="true">Pinia</ToDoItem>
        <ToDoItem :is-checked="true">Vue Router</ToDoItem>
        <ToDoItem :is-checked="true">SASS</ToDoItem>
        <ToDoItem :is-checked="true">TailwindCSS</ToDoItem>
        <ToDoItem :is-checked="true">Bootstrap</ToDoItem>
        <ToDoItem :is-checked="true">Styled Components</ToDoItem>
        <ToDoItem :is-checked="true">Figma</ToDoItem>
        <ToDoItem :is-checked="true">Canva</ToDoItem>
        <ToDoItem :is-checked="true">Vite</ToDoItem>
        <ToDoItem :is-checked="true">Webpack</ToDoItem>
        <ToDoItem :is-checked="true">ESLint</ToDoItem>
        <ToDoItem :is-checked="true">Prettier</ToDoItem>
        <ToDoItem :is-checked="true">Browser Dev Tools</ToDoItem>
        <ToDoItem :is-checked="true">NextAuth.js</ToDoItem></ToDoList
      >
    </Column>
    <Column>
      <TextHighlight>Database</TextHighlight>
      <ToDoList>
        <ToDoItem :is-checked="true">PostgreSQL</ToDoItem>
        <ToDoItem :is-checked="true">MongoDB</ToDoItem>
        <ToDoItem :is-checked="true">MySQL</ToDoItem>
        <ToDoItem :is-checked="true">HeidiSQL/MariaDB</ToDoItem>
        <ToDoItem :is-checked="true">SQLite</ToDoItem>
        <ToDoItem :is-checked="true">Firestore</ToDoItem>
        <ToDoItem :is-checked="true">TypeORM</ToDoItem>
        <ToDoItem :is-checked="true">Mongoose</ToDoItem>
        <ToDoItem>Prisma</ToDoItem>
        <ToDoItem :is-checked="true">Sequelize</ToDoItem>
        <ToDoItem :is-checked="true">SQL</ToDoItem>
      </ToDoList>
    </Column>
    <Column>
      <TextHighlight>Testing</TextHighlight>
      <ToDoList>
        <ToDoItem :is-checked="true">Vitest</ToDoItem>
        <ToDoItem :is-checked="true">Jest</ToDoItem>
        <ToDoItem :is-checked="true">Selenium</ToDoItem>
        <ToDoItem :is-checked="true">Testcontainers</ToDoItem>
        <ToDoItem :is-checked="true">Testing Library</ToDoItem>
      </ToDoList>
    </Column>
  </Columns>
</template>
