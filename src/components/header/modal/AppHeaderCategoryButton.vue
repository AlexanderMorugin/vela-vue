<template>
  <button class="headerMenuModal__categoryItem" @click="$emit('goToCurrentPage')">
    <div class="headerMenuModal__categoryItemTextBox">
      <span class="headerMenuModal__categoryItemName">{{ props.title }}</span>
      <span class="headerMenuModal__categoryItemQuantity">{{ props.quantity }}</span>
    </div>

    <!-- Стрелка -->
    <svg width="6" height="12" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
      <path
        class="headerMenuModal__categoryItemArrow"
        d="M1 13L7 7L1 1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['goToCurrentPage'])
const props = defineProps(['title', 'quantity'])
</script>

<style scoped>
.headerMenuModal__categoryItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
}
.headerMenuModal__categoryItemTextBox {
  text-align: left;
}
.headerMenuModal__categoryItemName {
  font-family: 'Maza';
  font-size: 16px;
  line-height: 20px;
  text-align: start;
  color: var(--grey-dark-primary);
  transition: 0.2s ease all;
}
.headerMenuModal__categoryItemQuantity {
  font-family: 'Maza';
  font-size: 14px;
  line-height: 20px;
  vertical-align: bottom;
  color: var(--grey-dark-primary);
  opacity: 0.5;
  padding-left: 10px;
  transition: 0.4s ease all;
}
.headerMenuModal__categoryItemArrow {
  display: none;
  transition: 0.3s ease all;
}
.headerMenuModal__categoryItem:hover .headerMenuModal__categoryItemName {
  color: var(--blue-primary);
}
.headerMenuModal__categoryItem:hover .headerMenuModal__categoryItemQuantity {
  color: var(--blue-primary);
  opacity: 1;
}
.headerMenuModal__categoryItem:hover .headerMenuModal__categoryItemArrow {
  display: block;
  stroke: var(--blue-primary);
}

@media (max-width: 1279px) {
  .headerMenuModal__categoryItem {
    gap: 10px;
  }
  .headerMenuModal__categoryItemName {
    font-size: 14px;
  }
}
</style>
