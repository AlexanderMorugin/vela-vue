<template>
  <div class="headerContent">
    <!-- Контент шапки сайта при ширине экрана от бескрайнего до 768px -->
    <div
      v-if="!isScreenMedium"
      class="headerContent__container"
      :class="isScroll ? 'headerContent__container_small' : ''"
    >
      <AppHeaderLogo />

      <!-- Основной контент шапки -->
      <div class="headerContent__subContainer">
        <div class="headerContent__subLine">
          <AppHeaderMenuButton @openMenuModal="openMenuModal" />
          <AppHeaderSearch />
          <AppHeaderSocials />
          <AppHeaderLang />
        </div>
        <AppHeaderMenu v-if="!isScroll" />

        <AppHeaderMenuModal v-if="isMenuModalOpen" @closeMenuModal="closeMenuModal" />
      </div>

      <!-- Блок Профиля в правом углу -->
      <div class="headerContent__profileContainer">
        <div class="headerContent__profile">
          <AppHeaderSquareButton name="favorite" @handleClick="handleClick('favorite')" />
          <AppHeaderSquareButton name="profile" @handleClick="handleClick('profile')" />
          <AppHeaderSquareButton name="cart" cartItems="20" @handleClick="handleClick('cart')" />
        </div>
        <AppHeaderMakeCompButton v-if="!isScroll" />
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
import AppHeaderMenu from './AppHeaderMenu.vue'
import AppHeaderMakeCompButton from './AppHeaderMakeCompButton.vue'
import AppHeaderMenuModal from './modal/AppHeaderMenuModal.vue'
import { useResizeMedium } from '@/use/useResizeMedium'
import { useScroll } from '@/use/useScroll'
import { ref } from 'vue'

const { isScroll } = useScroll()
const { isScreenMedium } = useResizeMedium()

const isMenuModalOpen = ref(false)

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

const openMenuModal = () => (isMenuModalOpen.value = !isMenuModalOpen.value)
const closeMenuModal = () => (isMenuModalOpen.value = false)
</script>

<style scoped>
.headerContent {
  background: var(--white-primary);
}
.headerContent__container {
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  height: 146px;
  margin: 0 auto;
  padding-top: 16px;
  padding-left: 40px;
  padding-right: 40px;
  border: 1px solid red;
}
.headerContent__container_small {
  align-items: center;
  height: 100px;
  padding-top: 0;
}
.headerContent__subContainer {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding-left: 35px;
}
.headerContent__subLine {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.headerContent__profileContainer {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 229px;
  padding-left: 53px;
}
.headerContent__profile {
  display: flex;
  gap: 16px;
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
    padding-left: 10px;
    padding-right: 10px;
  }
  .headerContent__subContainer {
    padding-left: 15px;
  }
  .headerContent__profileContainer {
    max-width: 154px;
    padding-left: 14px;
  }
  .headerContent__profile {
    gap: 10px;
  }
}

@media (max-width: 767px) {
  .headerContent__container {
    flex-direction: column;
    justify-content: flex-start;
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
