<template>
  <button :class="['headerTopButton', { headerTopButton_gap: props.gap === '8' }]">
    <!-- Иконка Места -->
    <svg
      v-if="props.img === 'ImagePlace'"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="headerTopButton__image"
        d="M8.05329 15C9.01182 13.926 13.3499 8.91748 13.3499 6.29663C13.3499 3.37134 10.9786 1 8.05329 1C5.12817 1 2.75666 3.37134 2.75666 6.29663C2.75666 8.91748 7.09492 13.926 8.05329 15ZM8.05329 4.02664C9.30702 4.02664 10.3233 5.0429 10.3233 6.29663C10.3233 7.55035 9.30702 8.56661 8.05329 8.56661C6.79957 8.56661 5.78331 7.55035 5.78331 6.29663C5.78466 5.04353 6.8002 4.028 8.05329 4.02664Z"
      />
    </svg>

    <!-- Иконка Телефона -->
    <svg
      v-if="props.img === 'ImagePhone'"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="headerTopButton__image"
        d="M10.3364 1.34649H5.6638C5.44518 1.34586 5.2286 1.38845 5.0265 1.47182C4.8244 1.55519 4.64078 1.67769 4.48619 1.83228C4.33161 1.98687 4.20911 2.17049 4.12574 2.37259C4.04237 2.57469 3.99977 2.79127 4.0004 3.00989V12.9903C4.0004 13.9127 4.75649 14.6537 5.6638 14.6537H10.3364C10.5551 14.6543 10.7716 14.6117 10.9737 14.5283C11.1758 14.445 11.3595 14.3225 11.514 14.1679C11.6686 14.0133 11.7911 13.8297 11.8745 13.6276C11.9579 13.4255 12.0005 13.2089 11.9998 12.9903V3.00989C12.0005 2.79127 11.9579 2.57469 11.8745 2.37259C11.7911 2.17049 11.6686 1.98687 11.514 1.83228C11.3595 1.67769 11.1758 1.55519 10.9737 1.47182C10.7716 1.38845 10.5551 1.34586 10.3364 1.34649ZM8.00768 13.58C7.58427 13.58 7.25159 13.2474 7.25159 12.8239C7.25159 12.4005 7.58427 12.0679 8.00768 12.0679C8.43109 12.0679 8.76377 12.4005 8.76377 12.8239C8.76377 13.2474 8.43109 13.58 8.00768 13.58ZM11.2437 11.2664H4.75649V3.5694H11.2437V11.2664Z"
      />
    </svg>

    <!-- Текст кнопки -->
    <span class="headerTopButton__text">{{ props.text }}</span>
  </button>
</template>

<script setup>
const props = defineProps(['img', 'text', 'gap'])
</script>

<style scoped>
.headerTopButton {
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
}
.headerTopButton_gap {
  gap: 8px;
}
.headerTopButton__image {
  fill: var(--grey-dark-primary);
  fill-opacity: 0.5;
  transition: 0.3s ease all;
}
.headerTopButton__text {
  font-family: 'Maza';
  font-size: 14px;
  color: var(--grey-dark-primary);
  transition: 0.3s ease all;
}
.headerTopButton:hover .headerTopButton__text {
  color: var(--blue-primary);
}
.headerTopButton:hover .headerTopButton__image {
  fill: var(--blue-primary);
  fill-opacity: 1;
}

@media (max-width: 767px) {
  .headerTopButton__text {
    font-size: 16px;
  }
}

@media (max-width: 339px) {
  .headerTopButton__text {
    font-size: 14px;
  }
}
</style>
