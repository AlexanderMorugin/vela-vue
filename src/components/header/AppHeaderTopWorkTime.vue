<template>
  <div class="headerWorkTime">
    <span class="headerWorkTime__text">{{ props.days }}</span>
    <span class="headerWorkTime__text">{{ props.hours }}</span>
  </div>
</template>

<script setup>
const props = defineProps(['days', 'hours'])
</script>

<style scoped>
.headerWorkTime {
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
}
.headerWorkTime__text {
  font-family: 'Maza';
  font-size: 14px;
  color: var(--grey-dark-primary);
}
</style>
