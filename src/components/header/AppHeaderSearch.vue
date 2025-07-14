<template>
  <form class="headerSearch" @submit.prevent="searshSubmit">
    <input
      type="text"
      id="searchField"
      name="searchField"
      placeholder="Поиск товаров..."
      v-model="searchField"
      class="headerSearch__input"
    />
    <AppHeaderSearchButton :searchField="searchField" />
  </form>
</template>

<script setup>
import { ref } from 'vue'
import AppHeaderSearchButton from './AppHeaderSearchButton.vue'

const searchField = ref(null)

const searshSubmit = () => {
  console.log(searchField.value)
  searchField.value = null
}
</script>

<style scoped>
.headerSearch {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  width: 100%;
  max-width: 654px;
  height: 48px;
  border: 1px solid rgba(72, 136, 255, 0.2);
  border-radius: 8px;
  margin-left: 16px;
  padding: 4px;
}
.headerSearch__input {
  width: 100%;
  height: 100%;
  font-family: 'Maza';
  font-size: 16px;
  color: var(--grey-dark-primary);
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: 0.3s ease all;
}
.headerSearch__input:focus {
  font-family: 'Maza';
  font-size: 16px;
  color: var(--grey-dark-primary);
  outline: 0;
  border: 1px solid var(--blue-primary);
}
.headerSearch__input::placeholder {
  font-family: 'Maza';
  font-size: 16px;
  color: rgba(52, 58, 63, 0.5);
}

@media (max-width: 1023px) {
  .headerSearch {
    height: 40px;
    padding: 3px;
    margin-left: 14px;
  }
  .headerSearch__input {
    padding-left: 13px;
    padding-right: 13px;
  }
}

@media (max-width: 767px) {
  .headerSearch {
    height: 46px;
    margin-left: 0;
  }
}
</style>
