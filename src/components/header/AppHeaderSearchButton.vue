<template>
  <button :class="['headerSearchButton', { headerSearchButton_disabled: !props.searchField }]">
    <span v-if="!isScreenMedium" class="headerSearchButton__text">Найти</span>
    <img v-else src="@/img/img-search.svg" alt="Иконка поиска" />
  </button>
</template>

<script setup>
import { useResizeMedium } from '@/use/useResizeMedium'
const props = defineProps(['searchField'])

const { isScreenMedium } = useResizeMedium()
</script>

<style scoped>
.headerSearchButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 78px;
  height: 100%;
  background: var(--blue-primary);
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s ease all;
}
.headerSearchButton:hover {
  background: var(--grey-dark-primary);
}
.headerSearchButton_disabled {
  background: var(--grey-secondary);
  cursor: auto;
}
.headerSearchButton_disabled:hover {
  background: var(--grey-secondary);
}
.headerSearchButton__text {
  font-family: 'Maza';
  font-size: 14px;
  color: var(--white-primary);
}

@media (max-width: 767px) {
  .headerSearchButton {
    max-width: 40px;
  }
}
</style>
