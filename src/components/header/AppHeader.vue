<template>
  <header class="header">
    <AppHeaderTop />
    <AppHeaderContent />
  </header>
</template>

<script setup>
import AppHeaderTop from './AppHeaderTop.vue'
import AppHeaderContent from './AppHeaderContent.vue'
</script>

<style scoped>
.header {
  position: sticky;
  top: -34px;
}
</style>
