<template>
  <AppHeader />
  <main class="main-layout"></main>
</template>

<script setup>
import AppHeader from '@/components/header/AppHeader.vue'
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr;
  background: var(--white-primary);
}
/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
} */
</style>
