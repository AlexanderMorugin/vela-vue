<template>
  <div class="headerLang">
    <!-- Иконка Земного шара -->
    <svg class="headerLang__image" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.00006 1C4.1405 1 1 4.1204 1 8.00006C1 11.869 4.13079 15.0001 8.00006 15.0001C11.8751 15.0001 15.0001 11.8627 15.0001 8.00006C15.0002 4.12357 11.8615 1 8.00006 1ZM7.19237 2.64532C6.4179 3.14769 5.87638 3.53335 5.75645 3.96156C5.54705 4.70942 6.87832 5.2534 7.24725 5.58096C7.91666 6.17525 7.60901 7.64699 6.909 8.30284C6.20899 8.95866 5.94879 9.62389 6.02568 10.124C6.12609 10.7773 6.86621 11.8157 7.26316 12.4601C7.66012 13.1044 7.23721 13.2502 6.6838 12.9211C6.27238 12.6764 4.37877 12.2149 3.80334 11.7968C3.22791 11.3787 3.04766 9.94608 3.22945 9.35036C3.41123 8.75465 3.62503 7.16812 2.71748 6.6436C2.48107 6.50696 2.30623 6.34416 2.17894 6.16677C2.98524 3.61232 5.42263 1.78992 8.24717 1.90285C7.84958 2.19447 7.45832 2.47281 7.19237 2.64532ZM13.1754 9.13683C12.3962 9.05551 11.4916 8.93148 11.3206 8.83766C10.6072 8.44631 10.842 7.91032 11.1375 7.13251C11.433 6.35474 9.94846 5.67406 9.94846 4.73933C9.94846 3.82577 10.5331 3.21974 11.2263 2.82226C12.9522 3.90151 14.1027 5.81879 14.1027 8.00006C14.1027 8.87146 13.9188 9.70056 13.5883 10.4512C13.557 9.79252 13.6208 9.18332 13.1754 9.13683Z"
      />
    </svg>

    <!-- Кнопки переключения языка -->
    <div class="headerLang__textBox">
      <button
        :class="['headerLang__text', { headerLang__text_active: isActiveLangRu }]"
        @click="toggleLang('RU')"
      >
        RU
      </button>
      <div class="headerLang__stick" />
      <button
        :class="['headerLang__text', { headerLang__text_active: isActiveLangEn }]"
        @click="toggleLang('EN')"
      >
        EN
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isActiveLangRu = ref(true)
const isActiveLangEn = ref(false)

const toggleLang = (id) => {
  if (!isActiveLangEn.value && id === 'EN') {
    isActiveLangEn.value = true
    isActiveLangRu.value = false
  }
  if (!isActiveLangRu.value && id === 'RU') {
    isActiveLangEn.value = false
    isActiveLangRu.value = true
  }
}
</script>

<style scoped>
.headerLang {
  display: flex;
  align-items: center;
  gap: 7px;
  width: fit-content;
  height: 48px;
  margin-left: 37px;
}
.headerLang__image {
  width: 21px;
  fill: var(--grey-dark-primary);
  fill-opacity: 0.5;
}
.headerLang:hover .headerLang__image {
  animation: spin 1000ms ease-in-out;
}
.headerLang__textBox {
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
}
.headerLang__text {
  font-family: 'Maza';
  font-size: 16px;
  color: var(--grey-dark-primary);
  opacity: 0.4;
  transition: 0.3s ease all;
}
.headerLang__text:hover {
  color: var(--blue-primary);
  opacity: 1;
}
.headerLang__text_active {
  opacity: 1;
  cursor: auto;
}
.headerLang__text_active:hover {
  color: var(--grey-dark-primary);
}
.headerLang__stick {
  width: 1px;
  height: 12px;
  background: var(--grey-dark-primary);
}

@media (max-width: 1023px) {
  .headerLang {
    height: 40px;
    margin-left: 17px;
  }
  .headerLang__image {
    width: 14px;
  }
  .headerLang__text {
    font-size: 14px;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
