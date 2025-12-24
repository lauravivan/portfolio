<script setup lang="ts">
import {
  Callout,
  Column,
  BulletList,
  BulletItem,
  Divider,
  Text,
  ToDoList,
  ToDoItem,
  Empty,
  Heading,
  LinkMention,
} from "@lauravivan/notion-portfolio";
</script>

<template>
  <main>
    <Text
      >Hi there 👋! My name is Laura, and I'm a passionate Web developer
      building end to end web applications. Here in my portfolio you can access
      my projects and achievments.
    </Text>
    <Column :number-of-columns="3">
      <template #column-1>
        <Callout>Education...</Callout>
        <BulletList>
          <BulletItem>
            I made a year of Computer Science at Universidade Regional de
            Blumenau (FURB) before migrating to IS in another city. In my first
            year having contact with the 'technology world' I discovered a taste
            for logic, programming and databases. My first high level
            programming language was Java and continued after I moved on from
            institution.
          </BulletItem>
          <BulletItem
            >Information Systems graduate at Instituto Federal de Santa Catarina
            (IFSC).</BulletItem
          >
        </BulletList>
      </template>

      <template #column-2>
        <Callout>Projects...</Callout>
        <BulletList>
          <BulletItem>
            I was a scholarship holder for an extension project at college where
            we developed a web system for risk classification using Django
            Framework.
          </BulletItem>
          <BulletItem
            >I was also a scholarship holder in a project to develop an
            acessible system to reunite acessibility guidelines helping
            developers and interested people to build more acessible
            plataforms.</BulletItem
          >
          <BulletItem
            >As a freelancer I helped to build a plataform to be used by
            Portuguese students in filtering content on arquivo.pt API. This
            project also uses LLM to help creating context and keywords to help
            with more assertive research.</BulletItem
          ></BulletList
        >
      </template>

      <template #column-3>
        <Callout>Goals...</Callout>
        <BulletList
          ><BulletItem
            >Improve even further the necessary habilities to create great web
            applications</BulletItem
          ><BulletItem
            >Web development (full-stack) mid-level</BulletItem
          ></BulletList
        >
      </template>
    </Column>

    <Divider />

    <Empty />

    <Heading :level="3">Resume/CV</Heading>

    <LinkMention
      target=""
      href="https://www.canva.com/design/DAG0AypumF4/YPozcTGXLmAUqdARQbOApg/edit?utm_content=DAG0AypumF4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      emoji="👋"
      >Access my resume in Portuguese</LinkMention
    >

    <LinkMention
      target=""
      href="https://www.canva.com/design/DAG0A26TDnU/YHmnPBU-YM5Pl497cu4AAw/edit?utm_content=DAG0A26TDnU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      emoji="👋"
      >Access my resume in English</LinkMention
    >

    <Empty />

    <Divider />

    <Empty />

    <Heading :level="3">Technologies</Heading>

    <Text
      >What I had/have contact with will be checked, things that I want start
      having contact with and to dive deep will be not checked</Text
    >

    <Empty />

    <Column :number-of-columns="5">
      <template #column-1>
        <Text class="highlight">Programming Languages</Text>
        <ToDoList>
          <ToDoItem :is-checked="true">JavaScript</ToDoItem>
          <ToDoItem :is-checked="true">TypeScript</ToDoItem>
          <ToDoItem :is-checked="true">Java</ToDoItem>
          <ToDoItem :is-checked="true">Python</ToDoItem>
        </ToDoList>
        <Empty />
        <Text class="highlight">Frontend frameworks/libs</Text>
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
        </ToDoList>
        <Empty />
        <Text class="highlight">Frontend styling</Text>
        <ToDoList>
          <ToDoItem :is-checked="true">SASS</ToDoItem>
          <ToDoItem :is-checked="true">TailwindCSS</ToDoItem>
          <ToDoItem :is-checked="true">Bootstrap</ToDoItem>
          <ToDoItem :is-checked="true">Styled Components</ToDoItem>
        </ToDoList>
        <Empty />
        <Text class="highlight">Frontend prototyping</Text>
        <ToDoList>
          <ToDoItem :is-checked="true">Figma</ToDoItem>
          <ToDoItem :is-checked="true">Canva</ToDoItem>
        </ToDoList>
        <Empty />
        <Text class="highlight">Frontend bundling & dev tools</Text>
        <ToDoList>
          <ToDoItem :is-checked="true">Vite</ToDoItem>
          <ToDoItem :is-checked="true">Webpack</ToDoItem>
          <ToDoItem :is-checked="true">ESLint</ToDoItem>
          <ToDoItem :is-checked="true">Prettier</ToDoItem>
          <ToDoItem :is-checked="true">Browser Dev Tools</ToDoItem>
        </ToDoList>
        <Empty />
        <Text class="highlight">Frontend auth</Text>
        <ToDoList>
          <ToDoItem :is-checked="true">NextAuth.js</ToDoItem>
        </ToDoList>
        <Empty />
      </template>
      <template #column-2>
        <Text class="highlight">Backend frameworks & runtime</Text>
        <ToDoList>
          <ToDoItem :is-checked="true">Express.js</ToDoItem>
          <ToDoItem :is-checked="true">Node.js</ToDoItem>
          <ToDoItem :is-checked="true">Nest.js</ToDoItem>
        </ToDoList>
        <Empty />
        <Text class="highlight">APIs</Text>
        <ToDoList>
          <ToDoItem :is-checked="true">REST</ToDoItem>
          <ToDoItem :is-checked="false">GraphQL</ToDoItem>
          <ToDoItem :is-checked="false">WebSockets</ToDoItem>
        </ToDoList>
        <Empty />
        <Text class="highlight">Documentation</Text>
        <ToDoList>
          <ToDoItem :is-checked="false">Swagger</ToDoItem>
          <ToDoItem :is-checked="true">Postman</ToDoItem>
          <ToDoItem :is-checked="true">Insomnia</ToDoItem>
          <ToDoItem :is-checked="true">Yaak</ToDoItem>
          <ToDoItem :is-checked="true">ReDoc</ToDoItem>
        </ToDoList>
        <Empty />
        <Text class="highlight">CLI tools</Text>
        <ToDoList>
          <ToDoItem :is-checked="true">Git</ToDoItem>
          <ToDoItem :is-checked="false">Sed</ToDoItem>
          <ToDoItem :is-checked="true">Curl</ToDoItem>
          <ToDoItem :is-checked="false">Find</ToDoItem>
          <ToDoItem :is-checked="false">Grep</ToDoItem>
          <ToDoItem :is-checked="false">Fzf</ToDoItem>
          <ToDoItem :is-checked="false">Jq</ToDoItem>
        </ToDoList>
        <Empty />
      </template>
      <template #column-3>
        <Text class="highlight">Database</Text>
        <ToDoList>
          <ToDoItem :is-checked="true">PostgreSQL</ToDoItem>
          <ToDoItem :is-checked="true">MongoDB</ToDoItem>
          <ToDoItem :is-checked="true">MySQL</ToDoItem>
          <ToDoItem :is-checked="true">HeidiSQL/MariaDB</ToDoItem>
          <ToDoItem :is-checked="true">SQLite</ToDoItem>
          <ToDoItem :is-checked="true">Firestore</ToDoItem>
        </ToDoList>
        <Empty />
        <Text class="highlight">ORMs/ODMs</Text>
        <ToDoList>
          <ToDoItem :is-checked="true">TypeORM</ToDoItem>
          <ToDoItem :is-checked="true">Mongoose</ToDoItem>
          <ToDoItem :is-checked="false">Prisma</ToDoItem>
          <ToDoItem :is-checked="true">Sequelize</ToDoItem>
        </ToDoList>
        <Empty />
        <Text class="highlight">Query languages</Text>
        <ToDoList>
          <ToDoItem :is-checked="true">SQL</ToDoItem>
        </ToDoList>
      </template>
      <template #column-4>
        <Text class="highlight">Testing</Text>
        <ToDoList>
          <ToDoItem :is-checked="true">Vitest</ToDoItem>
          <ToDoItem :is-checked="true">Jest</ToDoItem>
          <ToDoItem :is-checked="true">Selenium</ToDoItem>
          <ToDoItem :is-checked="true">Testcontainers</ToDoItem>
          <ToDoItem :is-checked="true">Testing Library</ToDoItem>
        </ToDoList>
        <Empty />
        <Text class="highlight">Devops containers</Text>
        <ToDoList>
          <ToDoItem :is-checked="true">Docker</ToDoItem>
          <ToDoItem :is-checked="false">Kubernetes</ToDoItem>
        </ToDoList>
        <Empty />
        <Text class="highlight">Devops CI/CD</Text>
        <ToDoList>
          <ToDoItem :is-checked="true">GitHub Actions</ToDoItem>
        </ToDoList>
        <Empty />
      </template>
      <template #column-5>
        <Text class="highlight">Cloud - plataforms</Text>
        <ToDoList>
          <ToDoItem :is-checked="false">AWS (Amazon Web Services)</ToDoItem>
          <ToDoItem :is-checked="false">Azure</ToDoItem>
          <ToDoItem :is-checked="true">Google Cloud Platform (GCP)</ToDoItem>
        </ToDoList>
        <Empty />
        <Text class="highlight">Cloud - services</Text>
        <ToDoList>
          <ToDoItem :is-checked="true">Cloud Functions</ToDoItem>
          <ToDoItem :is-checked="true">Firebase</ToDoItem>
        </ToDoList>
      </template>
    </Column>
  </main>
</template>
