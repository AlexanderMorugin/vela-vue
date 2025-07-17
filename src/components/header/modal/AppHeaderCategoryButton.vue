<template>
  <button class="headerCategoryButton" @click="$emit('goToCurrentPage')">
    <div class="headerCategoryButton__textBox">
      <span class="headerCategoryButton__title">{{ props.title }}</span>
      <span class="headerCategoryButton__quantity">{{ props.quantity }}</span>
    </div>

    <!-- Стрелка -->
    <svg
      class="headerCategoryButton__arrowBox"
      fill="none"
      viewBox="0 0 8 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="headerCategoryButton__arrow"
        d="M1 13L7 7L1 1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['goToCurrentPage'])
const props = defineProps(['title', 'quantity'])
</script>

<style scoped>
.headerCategoryButton {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
}
.headerCategoryButton__textBox {
  text-align: left;
}
.headerCategoryButton__title {
  font-family: 'Maza';
  font-size: 16px;
  line-height: 20px;
  text-align: start;
  color: var(--grey-dark-primary);
  transition: 0.2s ease all;
}
.headerCategoryButton__quantity {
  font-family: 'Maza';
  font-size: 14px;
  line-height: 20px;
  vertical-align: bottom;
  color: var(--grey-dark-primary);
  opacity: 0.5;
  padding-left: 10px;
  transition: 0.4s ease all;
}
.headerCategoryButton__arrowBox {
  width: 6px;
  height: 12px;
}
.headerCategoryButton__arrow {
  display: none;
  transition: 0.3s ease all;
}
.headerCategoryButton:hover .headerCategoryButton__title {
  color: var(--blue-primary);
}
.headerCategoryButton:hover .headerCategoryButton__quantity {
  color: var(--blue-primary);
  opacity: 1;
}
.headerCategoryButton:hover .headerCategoryButton__arrow {
  display: block;
  stroke: var(--blue-primary);
}

@media (max-width: 1279px) {
  .headerCategoryButton {
    gap: 10px;
  }
  .headerCategoryButton__title {
    font-size: 14px;
  }
}

@media (max-width: 767px) {
  .headerCategoryButton {
    background: var(--grey-primary);
    height: 48px;
    border-bottom: none;
    border-radius: 6px;
    padding-left: 12px;
    padding-right: 12px;
  }
  .headerCategoryButton__title {
    font-size: 16px;
  }
  .headerCategoryButton__quantity {
    font-size: 16px;
  }
  .headerCategoryButton__arrowBox {
    width: 8px;
    height: 14px;
  }
  .headerCategoryButton:hover .headerCategoryButton__arrow {
    display: block;
    stroke: var(--grey-dark-primary);
  }
}
</style>
