<template>
  <nav>
    <ul class="headerMenu">
      <li v-for="item in headerMenu.category.slice(1, 6)" :key="item.id" class="headerMenu__item">
        <button class="headerMenu__button">
          <img :src="item.img" :alt="item.text" class="headerMenu__img" />
          <span class="headerMenu__text">{{ item.text }}</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { headerMenu } from '@/js/header-menu'
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
  width: 100%;
}
.headerMenu__button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 42px;
  background: var(--grey-primary);
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 10px;
}
.headerMenu__img {
  width: 20px;
  height: 20px;
  opacity: 0.5;
  transition: 0.3s ease all;
}
.headerMenu__text {
  font-family: 'Maza';
  font-size: 16px;
  color: var(--grey-dark-primary);
  white-space: nowrap;
  transition: 0.3s ease all;
}
.headerMenu__button:hover .headerMenu__img {
  opacity: 1;
}
.headerMenu__button:hover .headerMenu__text {
  color: var(--blue-primary);
}

@media (max-width: 1279px) {
  .headerMenu {
    gap: 10px;
  }
  .headerMenu__button {
    gap: 4px;
    padding-left: 6px;
    padding-right: 6px;
  }
  .headerMenu__img {
    width: 14px;
    height: 14px;
  }
  .headerMenu__text {
    font-size: 13px;
  }
}

@media (max-width: 1023px) {
  .headerMenu {
    gap: 4px;
  }
  .headerMenu__img {
    display: none;
  }
}
</style>
