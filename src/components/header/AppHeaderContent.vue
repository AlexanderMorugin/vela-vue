<template>
  <div class="headerContent">
    <!-- Контент шапки сайта при ширине экрана от бескрайнего до 768px -->
    <div v-if="!isScreenMedium" class="headerContent__container">
      <AppHeaderLogo />
      <AppHeaderMenuButton />
      <AppHeaderSearch />
      <AppHeaderSocials />
      <AppHeaderLang />
      <div class="headerContent__profile">
        <AppHeaderSquareButton name="favorite" @handleClick="handleClick('favorite')" />
        <AppHeaderSquareButton name="profile" @handleClick="handleClick('profile')" />
        <AppHeaderSquareButton name="cart" cartItems="20" @handleClick="handleClick('cart')" />
      </div>
    </div>

    <!-- Контент шапки сайта при ширине экрана от 768px до минимального -->
    <div v-else class="headerContent__container">
      <div class="headerContent__topLine">
        <div class="headerContent__profile">
          <AppHeaderMenuButton />
          <AppHeaderSquareButton name="favorite" @handleClick="handleClick('favorite')" />
        </div>
        <AppHeaderLogo />
        <div class="headerContent__profile">
          <AppHeaderSquareButton name="profile" @handleClick="handleClick('profile')" />
          <AppHeaderSquareButton name="cart" cartItems="20" @handleClick="handleClick('cart')" />
        </div>
      </div>

      <AppHeaderSearch />
    </div>
  </div>
</template>

<script setup>
import AppHeaderLogo from './AppHeaderLogo.vue'
import AppHeaderMenuButton from './AppHeaderMenuButton.vue'
import AppHeaderSearch from './AppHeaderSearch.vue'
import AppHeaderLang from './AppHeaderLang.vue'
import AppHeaderSocials from './AppHeaderSocials.vue'
import AppHeaderSquareButton from './AppHeaderSquareButton.vue'
import { useResizeMedium } from '@/use/useResizeMedium'

const { isScreenMedium } = useResizeMedium()

const handleClick = (args) => {
  if (args === 'favorite') {
    console.log('Go to Favorite Page')
  }
  if (args === 'profile') {
    console.log('Go to Profile Page')
  }
  if (args === 'cart') {
    console.log('Go to Cart Page')
  }
}
</script>

<style scoped>
.headerContent {
  background: var(--white-primary);
}
.headerContent__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  height: 100px;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
  border: 1px solid red;
}
.headerContent__profile {
  display: flex;
  gap: 16px;
  width: fit-content;
  margin-left: 53px;
}
.headerContent__topLine {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
}

@media (max-width: 1023px) {
  .headerContent__container {
    padding-left: 20px;
    padding-right: 20px;
  }
  .headerContent__profile {
    gap: 10px;
    margin-left: 13px;
  }
}

@media (max-width: 767px) {
  .headerContent__container {
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: flex-start; */
    height: 146px;
    padding-left: 16px;
    padding-right: 16px;
  }
  .headerContent__profile {
    gap: 6px;
    margin-left: 0;
  }
}
</style>
