<script setup lang="ts">
import {
  Callout,
  BulletItem,
  BulletList,
  Empty,
  Link
} from "@lauravivan/notion-portfolio";
</script>

<template>
  <Callout>Reach me</Callout>

  <BulletList>
    <BulletItem>E-mail: lauvivang@gmail.com</BulletItem>
  </BulletList>

  <Empty />

  <Callout>Social Media</Callout>
  
  <BulletList>
    <BulletItem>LinkedIn: <Link href="https://linkedin.com/in/vivan-laura">linkedin.com/in/vivan-laura</Link></BulletItem>
    <BulletItem>Github: <Link href="https://github.com/lauravivan">github.com/lauravivan</Link></BulletItem>
    <BulletItem>Devto: @vivanlaura</BulletItem>
    <BulletItem>Lattes: <Link href="https://lattes.cnpq.br/5593790214023154">lattes.cnpq.br/5593790214023154</Link></BulletItem>
  </BulletList>
</template>
