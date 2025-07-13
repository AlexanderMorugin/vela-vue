<template>
  <div class="headerTop">
    <div class="headerTop__container">
      <div class="headerTop__left">
        <AppHeaderLang v-if="isScreenMedium" />
        <AppHeaderTopButton v-if="!isScreenMedium" img="ImagePlace" text="Сайлент-Хилл" gap="4" />
        <AppHeaderTopButton img="ImagePhone" :text="phoneNumber" gap="8" />
      </div>
      <AppHeaderTopWorkTime v-if="!isScreenMedium" :days="workDays" :hours="workHours" />
      <AppHeaderTopNav v-if="!isScreenMedium" />
    </div>
  </div>
</template>

<script setup>
import { phoneNumber, workDays, workHours } from '@/js/constants'
import { useResizeMedium } from '@/use/useResizeMedium'
import AppHeaderTopButton from './AppHeaderTopButton.vue'
import AppHeaderTopWorkTime from './AppHeaderTopWorkTime.vue'
import AppHeaderTopNav from './AppHeaderTopNav.vue'
import AppHeaderLang from './AppHeaderLang.vue'

const { isScreenMedium } = useResizeMedium()
</script>

<style scoped>
.headerTop {
  background: var(--grey-primary);
}
.headerTop__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  height: 34px;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
}
.headerTop__left {
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
}
@media (max-width: 1023px) {
  .headerTop__container {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media (max-width: 767px) {
  .headerTop__container {
    height: 26px;
    padding-left: 16px;
    padding-right: 16px;
  }
  .headerTop__left {
    justify-content: space-between;
    width: 100%;
  }
}
</style>
