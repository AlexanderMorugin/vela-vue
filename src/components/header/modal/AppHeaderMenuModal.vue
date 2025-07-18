<template>
  <component
    :is="
      props.tag === 'contentMenuButton'
        ? AppHeaderMenuModalButtonLayout
        : AppHeaderMenuModalScrollLayout
    "
  >
    <div :class="['headerMenuModal', { headerMenuModal_active: isCategoryActive }]">
      <!-- Список каталога меню - Кнопки -->
      <ul class="headerMenuModal__catalog">
        <li v-for="item in props.dataArray" :key="item.id">
          <AppHeaderCatalogButton
            :item="item"
            :currentId="currentId"
            @showContent="showContent(item)"
          />
        </li>
      </ul>

      <!-- Список категорий и их элементов, определяется по нажатию на кнопку выше  -->
      <ul class="headerMenuModal__categoryList">
        <li
          v-for="categoryItem in details"
          :key="categoryItem.id"
          class="headerMenuModal__category"
        >
          <span class="headerMenuModal__categoryName">{{ categoryItem.title }}</span>

          <ul class="headerMenuModal__categoryItems">
            <li v-for="item in categoryItem.details" :key="item.id">
              <AppHeaderCategoryButton
                :title="item.title"
                :quantity="item.quantity"
                @goToCurrentPage="goToCurrentPage"
              />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </component>
</template>

<script setup>
import { ref } from 'vue'
import AppHeaderCatalogButton from './AppHeaderCatalogButton.vue'
import AppHeaderCategoryButton from './AppHeaderCategoryButton.vue'
import AppHeaderMenuModalScrollLayout from '@/layouts/AppHeaderMenuModalScrollLayout.vue'
import AppHeaderMenuModalButtonLayout from '@/layouts/AppHeaderMenuModalButtonLayout.vue'

const emit = defineEmits(['closeMenuModal'])
const props = defineProps(['dataArray', 'tag'])

const isCategoryActive = ref(false)
const details = ref([])
const currentId = ref(null)

const showContent = (item) => {
  details.value = []
  isCategoryActive.value = false
  currentId.value = null

  if (item.details) {
    details.value = item.details
    isCategoryActive.value = true
    currentId.value = item.id
  } else {
    details.value = []
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
.headerMenuModal {
  display: flex;
  width: 100%;
  max-width: 338px;
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
  width: 100%;
  max-width: 892px;
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
