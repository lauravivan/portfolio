<script setup lang="ts">
import {
  Callout,
  BulletItem,
  BulletList,
  Empty,
  Link,
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
    <BulletItem
      >LinkedIn:
      <Link href="https://linkedin.com/in/vivan-laura"
        >linkedin.com/in/vivan-laura</Link
      ></BulletItem
    >
    <BulletItem
      >Github:
      <Link href="https://github.com/lauravivan"
        >github.com/lauravivan</Link
      ></BulletItem
    >
    <BulletItem
      >Devto:
      <Link href="https://dev.to/vivanlaura"
        >dev.to/vivanlaura</Link
      ></BulletItem
    >
    <BulletItem
      >Medium:
      <Link href="https://medium.com/@lauvivang"
        >medium.com/@lauvivang</Link
      ></BulletItem
    >
    <BulletItem
      >X:
      <Link href="https://x.com/lauvivans">x.com/lauvivans</Link></BulletItem
    >
  </BulletList>
</template>
