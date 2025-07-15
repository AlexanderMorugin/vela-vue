<template>
  <div class="headerMenuModalMobileTopBlock">
    <div class="headerMenuModalMobileTopBlock__leftSide">
      <AppHeaderTopButton img="ImagePlace" text="г.Москва" gap="8" />
      <AppHeaderTopWorkTime
        v-if="!isScreenMedium"
        :days="workDays"
        :hours="workHours"
        img="ImageClock"
      />
    </div>

    <AppHeaderSocials />
  </div>
</template>

<script setup>
import AppHeaderTopButton from '../AppHeaderTopButton.vue'
import AppHeaderTopWorkTime from '../AppHeaderTopWorkTime.vue'
import AppHeaderSocials from '../AppHeaderSocials.vue'
import { workDays, workHours } from '@/js/constants'
</script>

<style scoped>
.headerMenuModalMobileTopBlock {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.headerMenuModalMobileTopBlock__leftSide {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
