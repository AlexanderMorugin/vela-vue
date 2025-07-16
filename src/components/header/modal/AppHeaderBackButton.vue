<template>
  <!-- Кнопка возврата -->
  <button class="headerBackButton" @click="$emit('handleBack')">
    <!-- Стрелка -->
    <svg
      class="headerBackButton__arrowBox"
      fill="none"
      viewBox="0 0 8 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="headerBackButton__arrow"
        d="M1 13L7 7L1 1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <span class="headerBackButton__text">{{ props.text }}</span>
  </button>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['handleBack'])
const props = defineProps(['text'])
</script>

<style scoped>
.headerBackButton {
  display: flex;
  align-items: center;
  gap: 38px;
  width: 100%;
  height: 48px;
  padding-left: 8px;
  padding-right: 8px;
}
.headerBackButton__arrowBox {
  width: 8px;
  height: 14px;
  transform: rotate(180deg);
}
.headerBackButton__arrow {
  stroke: var(--grey-dark-secondary);
  transition: 0.3s ease all;
}
.headerBackButton__text {
  font-family: 'Maza';
  font-size: 20px;
  color: var(--grey-dark-primary);
  white-space: nowrap;
  transition: 0.3s ease all;
}
.headerBackButton:hover .headerBackButton__arrow {
  stroke: var(--blue-primary);
  stroke-width: 2px;
}
.headerBackButton:hover .headerBackButton__text {
  color: var(--blue-primary);
}
</style>
