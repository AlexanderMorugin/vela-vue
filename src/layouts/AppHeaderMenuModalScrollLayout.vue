<template>
  <div :class="['headerMenuModalScroll', { headerMenuModalScroll_active: isScroll }]">
    <slot />
  </div>
</template>

<script setup>
import { useScroll } from '@/use/useScroll'

const { isScroll } = useScroll()
</script>

<style scoped>
.headerMenuModalScroll {
  width: fit-content;
}
.headerMenuModalScroll_active {
  position: fixed;
  top: 92px;
}
</style>
