<template>
  <button class="headerCatalogButton" @click="$emit('showContent')">
    <div class="headerCatalogButton__textBox">
      <img :src="props.img" :alt="props.text" class="headerCatalogButton__image" />
      <span class="headerCatalogButton__text">{{ props.text }}</span>
    </div>
    <!-- Стрелка -->
    <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
      <path
        class="headerCatalogButton__arrow"
        d="M1 13L7 7L1 1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['showContent'])
const props = defineProps(['img', 'text'])
</script>

<style scoped>
.headerCatalogButton {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 338px;
  height: 50px;
  border-bottom: 1px solid var(--grey-thirdary);
  padding-left: 30px;
  padding-right: 30px;
}
.headerCatalogButton__textBox {
  display: flex;
  align-items: center;
  gap: 16px;
}
.headerCatalogButton__image {
  width: 24px;
  height: 24px;
  opacity: 0.5;
  transition: 0.3s ease all;
}
.headerCatalogButton__text {
  font-family: 'Maza';
  font-size: 16px;
  color: var(--grey-dark-primary);
  white-space: nowrap;
  transition: 0.3s ease all;
}
.headerCatalogButton__arrow {
  stroke: var(--grey-dark-primary);
  transition: 0.3s ease all;
}
.headerCatalogButton:hover {
  background: var(--grey-thirdary);
}
.headerCatalogButton:hover .headerCatalogButton__image {
  opacity: 1;
}
.headerCatalogButton:hover .headerCatalogButton__arrow {
  stroke: var(--blue-primary);
  stroke-width: 2px;
}
</style>
