<template>
  <div class="headerMenuModal">
    <!-- Список каталога меню - Кнопки -->
    <ul class="headerMenuModal__catalog">
      <li v-for="item in headerCatalogMenu" :key="item.id">
        <AppHeaderCatalogButton
          :img="item.img"
          :text="item.text"
          @showContent="showContent(item.category)"
        />
      </li>
    </ul>

    <!-- Список категорий и их элементов, определяется по нажатию на кнопку выше  -->
    <ul class="headerMenuModal__category">
      <li v-for="categoryItem in category" :key="categoryItem.id">
        <span>{{ categoryItem.name }}</span>
        <ul>
          <li v-for="item in categoryItem.items" :key="item.id">
            <span>{{ item.text }} {{ item.quantity }}</span>
          </li>
        </ul>
      </li>
    </ul>

    <div v-if="noCategory">
      <span>Должен быть переход на страницу, но роутинг не прикручен :)</span>
    </div>
  </div>
</template>

<script setup>
import { headerCatalogMenu } from '@/js/header-catalog-menu'
import AppHeaderCatalogButton from './AppHeaderCatalogButton.vue'
import { ref } from 'vue'

const category = ref([])
const noCategory = ref(false)

const showContent = (args) => {
  noCategory.value = false

  if (args) {
    category.value = args
  } else {
    category.value = []
    noCategory.value = true
  }
}
</script>

<style scoped>
.headerMenuModal {
  display: flex;
  gap: 40px;
  width: fit-content;
  background: var(--white-primary);
  border-radius: 8px;
  box-shadow: rgba(157, 157, 157, 0.35) 0px 0px 10px 0px;
  -webkit-box-shadow: rgba(157, 157, 157, 0.35) 0px 0px 10px 0px;
  -moz-box-shadow: rgba(157, 157, 157, 0.35) 0px 0px 10px 0px;
  padding: 28px 28px 23px 0;
  z-index: 10;
}
.headerMenuModal__catalog {
  display: flex;
  flex-direction: column;
}
.headerMenuModal__category {
  display: flex;
  gap: 40px;
}
</style>
