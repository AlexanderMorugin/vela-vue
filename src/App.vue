<template>
  <AppHeader />
  <main class="main-layout"></main>
</template>

<script setup>
import AppHeader from '@/components/header/AppHeader.vue'
</script>

<style scoped>
.main-layout {
  height: 1000px;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr;
  background: var(--blue-primary);
}
/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
} */
</style>
