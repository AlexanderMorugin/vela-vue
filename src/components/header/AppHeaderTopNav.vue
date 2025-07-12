<template>
  <nav>
    <ul class="headerTopNav">
      <li v-for="itemNav in headerTopNav" :key="itemNav.id" class="headerTopNav__item">
        {{ itemNav.text }}
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { headerTopNav } from '@/js/header-top-nav'
</script>

<style scoped>
.headerTopNav {
  display: flex;
  align-items: center;
  gap: 16px;
  width: fit-content;
}
.headerTopNav__item {
  font-family: 'Maza';
  font-size: 14px;
  color: var(--grey-dark-primary);
  cursor: pointer;
  transition: 0.3s ease all;
}
.headerTopNav__item:hover {
  color: var(--blue-primary);
}
</style>
