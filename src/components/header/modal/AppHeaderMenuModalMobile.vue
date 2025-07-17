<template>
  <div class="headerMenuModalMobile">
    <!-- Блок с адресом и соц сетями -->
    <AppHeaderMenuModalMobileTopBlock v-if="!isButtonBackActive" />
    <!-- Список каталога меню - Кнопки -->
    <ul
      :class="[
        'headerMenuModalMobile__catalog',
        { headerMenuModalMobile__catalog_active: isButtonBackActive },
      ]"
    >
      <!-- Кнопка Назад -->
      <li>
        <AppHeaderBackButton
          v-if="isButtonBackActive"
          :title="currentMenu.title"
          @handleBack="handleBack(currentMenu)"
        />
      </li>

      <!-- Список Категорий всего каталога -->
      <li v-for="item in currentMenu.details" :key="item.id">
        <!-- Кнопка меню стандартная, для перехода далее по меню -->
        <AppHeaderCatalogButton v-if="item.step" :item="item" @showContent="showContent(item)" />

        <!-- Кнопка меню конечная, для перехода на другую страницу -->
        <AppHeaderCategoryButton
          v-else
          :title="item.title"
          :quantity="item.quantity"
          @goToCurrentPage="goToCurrentPage"
        />
      </li>
    </ul>

    <AppHeaderMakeCompButton v-if="!isButtonBackActive" />

    <AppHeaderTopNav v-if="!isButtonBackActive" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeaderMenuModalMobileTopBlock from './AppHeaderMenuModalMobileTopBlock.vue'
import { headerMenu } from '@/js/header-menu'
import AppHeaderBackButton from './AppHeaderBackButton.vue'
import AppHeaderCatalogButton from './AppHeaderCatalogButton.vue'
import AppHeaderCategoryButton from './AppHeaderCategoryButton.vue'
import AppHeaderMakeCompButton from '../AppHeaderMakeCompButton.vue'
import AppHeaderTopNav from '../AppHeaderTopNav.vue'

const emit = defineEmits(['closeMenuModalMobile'])

const isButtonBackActive = ref(false)

const currentMenu = ref(headerMenu)
const prevMenuStepTwo = ref(null)
const prevMenuStepThree = ref(null)

const showContent = (item) => {
  isButtonBackActive.value = false

  if (item.details) {
    currentMenu.value = item

    isButtonBackActive.value = true
  } else {
    console.log('Go to current page')
    emit('closeMenuModalMobile')
  }

  if (item.step === 2) {
    prevMenuStepTwo.value = item
  }

  if (item.step === 3) {
    prevMenuStepThree.value = item
  }
}

const handleBack = (item) => {
  if (item.step === 2) {
    currentMenu.value = headerMenu
    isButtonBackActive.value = false
  }
  if (item.step === 3) {
    currentMenu.value = prevMenuStepTwo.value
  }
  if (item.step === 4) {
    currentMenu.value = prevMenuStepThree.value
  }
}

const goToCurrentPage = () => {
  console.log('Go to current page')
  emit('closeMenuModalMobile')
}
</script>

<style scoped>
.headerMenuModalMobile {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--white-primary);
  padding: 32px 16px;
  z-index: 10;
  animation: slide-from-left 0.3s ease-in-out;
}
.headerMenuModalMobile__catalog {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 24px;
}
.headerMenuModalMobile__catalog_active {
  padding-top: 0;
}

@keyframes slide-from-left {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
