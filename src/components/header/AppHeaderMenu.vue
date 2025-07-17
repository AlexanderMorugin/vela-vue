<template>
  <nav>
    <ul class="headerMenu">
      <li v-for="item in headerMenu.details.slice(1, 6)" :key="item.id" class="headerMenu__item">
        <AppHeaderContentMenuButton :item="item" />
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { headerMenu } from '@/js/header-menu'
import AppHeaderContentMenuButton from './AppHeaderContentMenuButton.vue'
</script>

<style scoped>
.headerMenu {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  width: 100%;
  max-width: 901px;
  padding: 0;
}
.headerMenu__item {
  position: relative;
  width: 100%;
}

@media (max-width: 1279px) {
  .headerMenu {
    gap: 10px;
  }
}

@media (max-width: 1023px) {
  .headerMenu {
    gap: 4px;
  }
}
</style>
