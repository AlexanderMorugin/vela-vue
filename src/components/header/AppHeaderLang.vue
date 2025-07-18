<template>
  <div class="headerLang">
    <!-- Иконка Земного шара -->
    <svg class="headerLang__image" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.0001 1.5C6.21074 1.5 1.5 6.1806 1.5 12.0001C1.5 17.8035 6.19618 22.5002 12.0001 22.5002C17.8126 22.5002 22.5002 17.794 22.5002 12.0001C22.5003 6.18535 17.7922 1.5 12.0001 1.5ZM10.7886 3.96798C9.62685 4.72153 8.81457 5.30002 8.63467 5.94233C8.32057 7.06413 10.3175 7.8801 10.8709 8.37143C11.875 9.26288 11.4135 11.4705 10.3635 12.4543C9.31349 13.438 8.92318 14.4358 9.03852 15.1861C9.18913 16.1659 10.2993 17.7236 10.8947 18.6901C11.4902 19.6566 10.8558 19.8752 10.0257 19.3816C9.40857 19.0147 6.56816 18.3223 5.70501 17.6952C4.84187 17.068 4.57149 14.9191 4.84417 14.0255C5.11684 13.132 5.43755 10.7522 4.07622 9.9654C3.7216 9.76044 3.45934 9.51623 3.26841 9.25016C4.47785 5.41848 8.13395 2.68487 12.3708 2.85427C11.7744 3.29171 11.1875 3.70921 10.7886 3.96798ZM19.763 13.7053C18.5943 13.5833 17.2374 13.3972 16.981 13.2565C15.9107 12.6695 16.263 11.8655 16.7063 10.6988C17.1495 9.53211 14.9227 8.51109 14.9227 7.109C14.9227 5.73865 15.7997 4.82961 16.8394 4.2334C19.4282 5.85226 21.1541 8.72819 21.1541 12.0001C21.1541 13.3072 20.8782 14.5508 20.3824 15.6767C20.3355 14.6888 20.4312 13.775 19.763 13.7053Z"
      />
    </svg>

    <!-- Кнопки переключения языка -->
    <div class="headerLang__textBox">
      <button
        @click="toggleLang('RU')"
        :class="['headerLang__text', { headerLang__text_active: isActiveLangRu }]"
      >
        RU
      </button>
      <div class="headerLang__stick" />
      <button
        @click="toggleLang('EN')"
        :class="['headerLang__text', { headerLang__text_active: isActiveLangEn }]"
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
  height: 24px;
  padding-left: 37px;
}
.headerLang__image {
  width: 24px;
  height: 24px;
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
  display: flex;
  align-items: center;
  font-family: 'Maza';
  font-size: 16px;
  color: var(--grey-dark-primary);
  opacity: 0.4;
  transition: 0.3s ease all;
  padding: 0;
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
    padding-left: 14px;
  }
  .headerLang__image {
    width: 16px;
    height: 16px;
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
