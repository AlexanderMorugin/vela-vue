<template>
  <div class="headerContentMenuButton__container">
    <button class="headerContentMenuButton" @click="handleClickButton(props.item.id)">
      <img :src="props.item.img" :alt="props.item.title" class="headerContentMenuButton__img" />
      <span class="headerContentMenuButton__text">{{ props.item.title }}</span>

      <!-- Маленькая модалка по клику кнопки События -->
      <AppHeaderCustomMenuModal
        v-if="isHeaderCustomMenuModalOpen"
        :data="dataArray"
        @goToPage="goToPage"
      />
    </button>

    <!-- Модалка Горячее предложение -->
    <AppHeaderMenuModal
      v-if="isHeaderMenuModalOpen"
      @closeMenuModal="closeHeaderMenuModal"
      :dataArray="dataArray"
      tag="contentMenuButton"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { headerEventMenu } from '@/js/header-event-menu'
import { headerHotOfferMenu } from '@/js/header-hot-offer-menu'
import AppHeaderCustomMenuModal from './modal/AppHeaderCustomMenuModal.vue'
import AppHeaderMenuModal from './modal/AppHeaderMenuModal.vue'

const props = defineProps(['item'])

const isHeaderCustomMenuModalOpen = ref(false)
const isHeaderMenuModalOpen = ref(false)
const dataArray = ref(null)

const closeHeaderMenuModal = () => (isHeaderMenuModalOpen.value = false)

const handleClickButton = (id) => {
  if (id === 4) {
    dataArray.value = headerEventMenu
    isHeaderCustomMenuModalOpen.value = !isHeaderCustomMenuModalOpen.value
  }
  if (id === 2) {
    dataArray.value = headerHotOfferMenu
    isHeaderMenuModalOpen.value = !isHeaderMenuModalOpen.value
  }
}

const goToPage = () => {
  console.log('Go to current page')
}
</script>

<style scoped>
.headerContentMenuButton__container {
  position: relative;
}
.headerContentMenuButton {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 42px;
  background: var(--grey-primary);
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 10px;
}
.headerContentMenuButton__img {
  width: 20px;
  height: 20px;
  opacity: 0.5;
  transition: 0.3s ease all;
}
.headerContentMenuButton__text {
  font-family: 'Maza';
  font-size: 16px;
  color: var(--grey-dark-primary);
  white-space: nowrap;
  transition: 0.3s ease all;
}
.headerContentMenuButton:hover .headerContentMenuButton__img {
  opacity: 1;
}
.headerContentMenuButton:hover .headerContentMenuButton__text {
  color: var(--blue-primary);
}

@media (max-width: 1279px) {
  .headerContentMenuButton {
    gap: 4px;
    padding-left: 6px;
    padding-right: 6px;
  }
  .headerContentMenuButton__img {
    width: 14px;
    height: 14px;
  }
  .headerContentMenuButton__text {
    font-size: 13px;
  }
}

@media (max-width: 1023px) {
  .headerContentMenuButton__img {
    display: none;
  }
}
</style>
