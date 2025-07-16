<template>
  <div class="headerMenuModalMobile">
    <!-- Блок с адресом и соц сетями -->
    <AppHeaderMenuModalMobileTopBlock />
    <!-- Список каталога меню - Кнопки -->
    <ul class="headerMenuModalMobile__catalog">
      <!-- Кнопка Назад -->
      <li>
        <AppHeaderBackButton
          v-if="isButtonBackActive"
          :text="textOfButtonBack"
          @handleBack="handleBack(textOfButtonBack)"
        />
      </li>

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

    <AppHeaderMakeCompButton />

    <AppHeaderTopNav />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import AppHeaderMenuModalMobileTopBlock from './AppHeaderMenuModalMobileTopBlock.vue'
import { headerMenu } from '@/js/header-menu'
import { headerCatalogMenu } from '@/js/header-catalog-menu'
import AppHeaderBackButton from './AppHeaderBackButton.vue'
import AppHeaderCatalogButton from './AppHeaderCatalogButton.vue'
import AppHeaderCategoryButton from './AppHeaderCategoryButton.vue'
import AppHeaderMakeCompButton from '../AppHeaderMakeCompButton.vue'
import AppHeaderTopNav from '../AppHeaderTopNav.vue'

const emit = defineEmits(['closeMenuModalMobile'])

const isButtonBackActive = ref(false)

const menu = ref(headerMenu.category)
const textOfButtonBack = ref(null)

const showContent = (args, id) => {
  menu.value = []
  isButtonBackActive.value = false

  if (args) {
    menu.value = args
    isButtonBackActive.value = true

    const currentObject = headerMenu.category.find((item) => item.id === id)
    textOfButtonBack.value = currentObject.text

    console.log(currentObject)
  } else {
    console.log('Go to current page')
    emit('closeMenuModalMobile')
  }
}

const handleBack = (args) => {
  if (args === textOfButtonBack.value) {
    isButtonBackActive.value = false
    menu.value = headerMenu.category
  }
}

// const goToCurrentPage = () => {
//   console.log('Go to current page')
//   emit('closeMenuModal')
// }
</script>

<style scoped>
.headerMenuModalMobile {
  /* position: fixed; */
  /* top: 172px; */
  display: flex;
  flex-direction: column;
  width: 100%;
  /* min-height: 100vh; */
  background: var(--white-primary);
  /* background: yellowgreen; */
  /* padding: 0 16px; */
  padding: 32px 16px;
  z-index: 10;
  /* overflow-y: scroll; */
  animation: slide-from-left 0.3s ease-in-out;
}
.headerMenuModalMobile__catalog {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 24px;
}
/* .headerMenuModal__categoryList {
  display: flex;
  gap: 40px;
  animation: slide-right 2s ease-in-out;
} */
/* .headerMenuModal__category {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 1fr;
  gap: 31px;
} */
/* .headerMenuModal__categoryName {
  font-family: 'Maza';
  font-size: 30px;
  line-height: 1;
  color: var(--grey-dark-primary);
} */
/* .headerMenuModal__categoryItems {
  display: flex;
  flex-direction: column;
  gap: 16px;
} */
/* .headerMenuModal__categoryItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
} */
/* .headerMenuModal__categoryItemTextBox {
  text-align: left;
} */
/* .headerMenuModal__categoryItemName {
  font-family: 'Maza';
  font-size: 16px;
  line-height: 20px;
  text-align: start;
  color: var(--grey-dark-primary);
  transition: 0.2s ease all;
} */
/* .headerMenuModal__categoryItemQuantity {
  font-family: 'Maza';
  font-size: 14px;
  line-height: 20px;
  vertical-align: bottom;
  color: var(--grey-dark-primary);
  opacity: 0.5;
  padding-left: 10px;
  transition: 0.4s ease all;
} */
/* .headerMenuModal__categoryItemArrow {
  display: none;
  transition: 0.3s ease all;
} */
/* .headerMenuModal__categoryItem:hover .headerMenuModal__categoryItemName {
  color: var(--blue-primary);
} */
/* .headerMenuModal__categoryItem:hover .headerMenuModal__categoryItemQuantity {
  color: var(--blue-primary);
  opacity: 1;
} */
/* .headerMenuModal__categoryItem:hover .headerMenuModal__categoryItemArrow {
  display: block;
  stroke: var(--blue-primary);
} */

/* @media (max-width: 1279px) {
  .headerMenuModal_active {
    gap: 10px;
    padding-right: 10px;
  }
  .headerMenuModal__categoryList {
    gap: 20px;
  }
  .headerMenuModal__category {
    grid-template-rows: 20px 1fr;
  }
  .headerMenuModal__categoryName {
    font-size: 20px;
  }
  .headerMenuModal__categoryItem {
    gap: 10px;
  }
  .headerMenuModal__categoryItemName {
    font-size: 14px;
  }
} */

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
