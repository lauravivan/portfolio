<script setup lang="ts">
import {
  Heading,
  LinkMention,
  Text,
  TextHighlight,
  BulletItem,
  BulletList,
  Callout,
  Empty,
  Columns,
  Column,
  Link,
  Image,
  useStore,
} from "@lauravivan/notion-portfolio";
import { computed } from "vue";

const store = useStore;

const isPageFullWidth = computed(
  () =>
    store.getDynamicPageInfo.volunteering.settings.pageSize ===
    "page-full-width",
);

const LINKEDIN_IFRAMES = [
  {
    link: "https://www.linkedin.com/embed/feed/update/urn:li:share:7394051440031449088?collapsed=1",
    height: "",
  },
  {
    link: "https://www.linkedin.com/embed/feed/update/urn:li:share:7404553073404235777?collapsed=1",
    height: "",
  },
  {
    link: "https://www.linkedin.com/embed/feed/update/urn:li:share:7420549775684431872?collapsed=1",
    height: "",
  },
  {
    link: "https://www.linkedin.com/embed/feed/update/urn:li:share:7442942133558222848?collapsed=1",
    height: "",
  },
  {
    link: "https://www.linkedin.com/embed/feed/update/urn:li:share:7444624334653956096?collapsed=1",
    height: "669",
  },
  {
    link: "https://www.linkedin.com/embed/feed/update/urn:li:share:7447075507944370176?collapsed=1",
    height: "653",
  },
  {
    link: "https://www.linkedin.com/embed/feed/update/urn:li:share:7447877378875478016?collapsed=1",
    height: "",
  },
  {
    link: "https://www.linkedin.com/embed/feed/update/urn:li:share:7469478109814284288?collapsed=1",
    height: "",
  },
];
</script>

<template>
  <Heading :level="1"
    >Volunteer at Lacrei Saúde - Front-End development team</Heading
  >

  <Callout
    >Lacrei Saúde is a social-impact health tech connecting the LGBTQIAPN+
    community with inclusive, qualified healthcare professionals.

    <Empty />

    In Lacrei Front-end team we work with a Design System called Marsha (in
    honor to Marhsa P. Johnson), accessibility standards, agile rituals, living
    documentation and peer review.

    <Empty />

    As being remote-first we have very diverse teams, from different regions
    across Latin America and abroad, where we teach, learn and deliver value
    continuously.
  </Callout>

  <LinkMention href="https://lacreisaude.com.br/" emoji="🩺"
    >Lacrei Saúde</LinkMention
  >

  <Heading :level="2">Front-End Developer</Heading>

  <Text><TextHighlight>October 2025 - January 2026</TextHighlight></Text>

  <Callout
    >As a Front-End Developer at Lacrei I was able to have a closer understading
    of Design System, agile process, handoffs and userflow</Callout
  >

  <Heading :level="2">Front-End Mentor</Heading>

  <Text><TextHighlight>January 2026 - March 2026</TextHighlight></Text>

  <Callout
    >I initiate as Front-End mentor at Lacrei to help the current Tech Lead. It
    was a very different dynamics, where I was introduced in a moment of a very
    amount of work accumulated and a race to stabilize Front-End with the new
    contracts of the API</Callout
  >

  <Heading :level="2">Front-End Tech Lead</Heading>

  <Text><TextHighlight>March 2026 - June 2026</TextHighlight></Text>

  <Callout
    >My biggest goals as the Front-End Tech Lead at Lacrei were improving DX,
    fixing archecture problems, giving ideas to make it better our workflow
    (Kanban) as we were facing issues with work accumulation and overload, and
    also taking tasks that were too long frozen</Callout
  >

  <Heading :level="2">What I have been posting about 👀</Heading>
  <template v-if="isPageFullWidth">
    <Columns
      :number-of-columns="2"
      v-for="index in Array.from({
        length: LINKEDIN_IFRAMES.length / 2,
      }).keys()"
      :key="index"
    >
      <Column>
        <iframe
          :src="LINKEDIN_IFRAMES[index * 2]?.link"
          :height="LINKEDIN_IFRAMES[index * 2]?.height || 264"
          frameborder="0"
          allowfullscreen="false"
          title="Embedded post"
        />
      </Column>
      <Column>
        <iframe
          :src="LINKEDIN_IFRAMES[index * 2 + 1]?.link"
          :height="LINKEDIN_IFRAMES[index * 2 + 1]?.height || 264"
          frameborder="0"
          allowfullscreen="false"
          title="Embedded post"
        />
      </Column>
    </Columns>
  </template>
  <template v-else>
    <div v-for="item in LINKEDIN_IFRAMES">
      <iframe
        :src="item.link"
        :height="item.height || 264"
        width="100%"
        frameborder="0"
        allowfullscreen="false"
        title="Embedded post"
      />
    </div>
  </template>

  <Text>Outros:</Text>
  <BulletList>
    <BulletItem
      ><Link
        href="https://www.linkedin.com/posts/vivan-laura_pequena-melhoria-de-dx-que-fiz-recentemente-activity-7439319147727020032-dz4B?utm_source=share&utm_medium=member_desktop&rcm=ACoAADX84MQBnYNXkczEEYqwYnJhfjEPtq-FhEY"
        >Melhorias de DX na estrutura dos testes do front</Link
      ></BulletItem
    >
    <BulletItem
      ><Link
        href="https://www.linkedin.com/posts/vivan-laura_no-post-anterior-falei-sobre-como-organizamos-activity-7450177973355343872-PFyN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADX84MQBnYNXkczEEYqwYnJhfjEPtq-FhEY"
        >Evidências de estruturação e padronização de layouts com Grid e
        Subgrid</Link
      ></BulletItem
    >
  </BulletList>

  <Heading :level="2">Certificates of Completion</Heading>

  <Image src="/frontend-dev-lacrei.webp" />
  <Image src="/frontend-mentor-lacrei.webp" />
</template>
