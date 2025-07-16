<template>
  <div :class="['', { headerMenuModalContainer: isScroll }]">
    <div :class="['headerMenuModal', { headerMenuModal_active: isCategoryActive }]">
      <!-- Список каталога меню - Кнопки -->
      <ul class="headerMenuModal__catalog">
        <li v-for="item in headerCatalogMenu" :key="item.id">
          <AppHeaderCatalogButton
            :item="item"
            :currentId="currentId"
            @showContent="showContent(item.category, item.id)"
          />
        </li>
      </ul>

      <!-- Список категорий и их элементов, определяется по нажатию на кнопку выше  -->
      <ul class="headerMenuModal__categoryList">
        <li
          v-for="categoryItem in category"
          :key="categoryItem.id"
          class="headerMenuModal__category"
        >
          <span class="headerMenuModal__categoryName">{{ categoryItem.name }}</span>

          <ul class="headerMenuModal__categoryItems">
            <li v-for="item in categoryItem.items" :key="item.id">
              <AppHeaderCategoryButton
                :text="item.text"
                :quantity="item.quantity"
                @goToCurrentPage="goToCurrentPage"
              />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { headerCatalogMenu } from '@/js/header-catalog-menu'
import AppHeaderCatalogButton from './AppHeaderCatalogButton.vue'
import AppHeaderCategoryButton from './AppHeaderCategoryButton.vue'
import { useScroll } from '@/use/useScroll'

const { isScroll } = useScroll()

const emit = defineEmits(['closeMenuModal'])

const isCategoryActive = ref(false)
const category = ref([])
const currentId = ref(null)

const showContent = (args, id) => {
  category.value = []
  isCategoryActive.value = false
  currentId.value = null

  if (args) {
    category.value = args
    isCategoryActive.value = true
    currentId.value = id
  } else {
    category.value = []
    console.log('Go to current page')
    emit('closeMenuModal')
  }
}

const goToCurrentPage = () => {
  console.log('Go to current page')
  emit('closeMenuModal')
}
</script>

<style scoped>
.headerMenuModalContainer {
  position: fixed;
  top: 92px;
}
.headerMenuModal {
  display: flex;
  width: fit-content;
  background: var(--white-primary);
  border-radius: 8px;
  box-shadow: rgba(157, 157, 157, 0.35) 0px 0px 10px 0px;
  -webkit-box-shadow: rgba(157, 157, 157, 0.35) 0px 0px 10px 0px;
  -moz-box-shadow: rgba(157, 157, 157, 0.35) 0px 0px 10px 0px;
  padding: 28px 0;
  z-index: 10;
  animation: slide-down 0.3s ease-in-out;
}
.headerMenuModal_active {
  gap: 40px;
  padding-right: 28px;
}
.headerMenuModal__catalog {
  display: flex;
  flex-direction: column;
}
.headerMenuModal__categoryList {
  display: flex;
  gap: 40px;
  animation: slide-right 2s ease-in-out;
}
.headerMenuModal__category {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 1fr;
  gap: 31px;
}
.headerMenuModal__categoryName {
  font-family: 'Maza';
  font-size: 30px;
  line-height: 1;
  color: var(--grey-dark-primary);
}
.headerMenuModal__categoryItems {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
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
}
.headerMenuModal__categoryItem:hover .headerMenuModal__categoryItemQuantity {
  color: var(--blue-primary);
  opacity: 1;
}
.headerMenuModal__categoryItem:hover .headerMenuModal__categoryItemArrow {
  display: block;
  stroke: var(--blue-primary);
} */

@media (max-width: 1279px) {
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
  /* .headerMenuModal__categoryItem {
    gap: 10px;
  }
  .headerMenuModal__categoryItemName {
    font-size: 14px;
  } */
}

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-right {
  from {
    opacity: 0;
    transform: translateX(-10%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
