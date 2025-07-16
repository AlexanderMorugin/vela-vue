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
      <!-- <li>
        <AppHeaderBackButton
          v-if="isButtonBackActive"
          :text="textOfButtonBack"
          @handleBack="handleBack(textOfButtonBack)"
        />
      </li> -->

      <!-- Список Категорий всего каталога -->
      <li v-for="item in menu" :key="item.id">
        <AppHeaderCatalogButton :item="item" @showContent="showContent(item.category, item.id)" />

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
// import { headerCatalogMenu } from '@/js/header-catalog-menu'
import AppHeaderBackButton from './AppHeaderBackButton.vue'
import AppHeaderCatalogButton from './AppHeaderCatalogButton.vue'
// import AppHeaderCategoryButton from './AppHeaderCategoryButton.vue'
import AppHeaderMakeCompButton from '../AppHeaderMakeCompButton.vue'
import AppHeaderTopNav from '../AppHeaderTopNav.vue'

const emit = defineEmits(['closeMenuModalMobile'])

const isButtonBackActive = ref(false)

const menu = ref(headerMenu.category)
const textOfButtonBack = ref(null)

const showContent = (category, id) => {
  // menu.value = headerMenu.category
  isButtonBackActive.value = false
  // currentObject.value = null

  const currentObject = headerMenu.category.find((item) => item.id === id)

  console.log(currentObject)

  if (category) {
    menu.value = category
    isButtonBackActive.value = true

    // currentObject.value = headerMenu.category.find((item) => item.id === id)
    // textOfButtonBack.value = currentObject.text
    // menu.value = currentObject.category

    // console.log(currentObject.value)
  } else {
    console.log('Go to current page')
    emit('closeMenuModalMobile')
  }
}

// const handleBack = (args) => {
//   if (args === textOfButtonBack.value) {
//     isButtonBackActive.value = false
//     menu.value = headerMenu.category
//   }
// }

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
