<template>
  <nav>
    <ul class="headerMenu">
      <li v-for="item in headerMenu" :key="item.id" class="headerMenu__item">
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
  transition: 0.3s ease all;
}
.headerMenu__button:hover .headerMenu__img {
  opacity: 1;
}
.headerMenu__button:hover .headerMenu__text {
  color: var(--blue-primary);
}
</style>
