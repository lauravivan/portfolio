<script setup lang="ts">
import {
  Callout,
  BulletItem,
  BulletList,
  Empty,
  Link,
  Image,
} from "@lauravivan/notion-portfolio";
</script>

<template>
  <Callout>Reach me</Callout>

  <BulletList>
    <BulletItem>E-mail: lauvivang@gmail.com</BulletItem>
    <BulletItem
      >Lattes:
      <Link href="https://lattes.cnpq.br/5593790214023154"
        >lattes.cnpq.br/5593790214023154</Link
      ></BulletItem
    >
  </BulletList>

  <Empty />

  <Callout>Where you can find me</Callout>

  <BulletList>
    <BulletItem>
      <Image src="/linkedin.svg" />
      <Link href="https://linkedin.com/in/vivan-laura"
        >Linkedin</Link
      ></BulletItem
    >
    <BulletItem>
      <Image src="/github.svg" />
      <Link href="https://github.com/lauvivans">Github</Link></BulletItem
    >
    <BulletItem>
      <Image src="/devto.svg" />
      <Link href="https://dev.to/lauvivans">dev.to</Link></BulletItem
    >
    <BulletItem>
      <Image src="/medium.svg" />
      <Link href="https://medium.com/lauvivans">Medium</Link></BulletItem
    >
    <BulletItem> <Link href="https://x.com/lauvivans">X</Link></BulletItem>
  </BulletList>
</template>

<style scoped lang="css">
.img-wrapper {
  flex: none;
  max-width: 5%;
}
</style>
