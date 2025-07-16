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
          :title="currentItem.title"
          @handleBack="handleBack(currentItem)"
        />
      </li>

      <!-- Список Категорий всего каталога -->
      <li v-for="item in currentItem.details" :key="item.id">
        <AppHeaderCatalogButton :item="item" @showContent="showContent(item)" />

        <!-- <AppHeaderCategoryButton

          :text="element.text"
          :quantity="element.quantity"
          @goToCurrentPage="goToCurrentPage"
        /> -->
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
import { headerCatalogMenu } from '@/js/header-catalog-menu'
import AppHeaderBackButton from './AppHeaderBackButton.vue'
import AppHeaderCatalogButton from './AppHeaderCatalogButton.vue'
// import AppHeaderCategoryButton from './AppHeaderCategoryButton.vue'
import AppHeaderMakeCompButton from '../AppHeaderMakeCompButton.vue'
import AppHeaderTopNav from '../AppHeaderTopNav.vue'

const emit = defineEmits(['closeMenuModalMobile'])

const isButtonBackActive = ref(false)

const currentItem = ref(headerMenu)
// const currentStepItem = ref(null)

const showContent = (item) => {
  isButtonBackActive.value = false

  if (item.details) {
    currentItem.value = item
    // currentStepItem.value = item
    isButtonBackActive.value = true

    console.log('currentItem - ', currentItem.value)
    // console.log('currentStepItem - ', currentStepItem.value)
  } else {
    console.log('Go to current page')
    emit('closeMenuModalMobile')
  }
}

const handleBack = (item) => {
  if (item.step === 2) {
    currentItem.value = headerMenu
    isButtonBackActive.value = false
  }
  // if (item.step === 3) {
  //   currentItem.value = headerCatalogMenu.map((item) => item.step === 3)
  // }

  // console.log('handleBack - currentItem: ', item)
  // console.log('handleBack - currentStepItem: ', currentStepItem.value)
}

// const goToCurrentPage = () => {
//   console.log('Go to current page')
//   emit('closeMenuModal')
// }
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
