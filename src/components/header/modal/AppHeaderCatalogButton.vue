<template>
  <button
    :class="['headerCatalogButton', { headerCatalogButton_active: props.item.id === currentId }]"
    @click="$emit('showContent')"
  >
    <div class="headerCatalogButton__textBox">
      <img
        v-if="props.item.img"
        :src="props.item.img"
        :alt="props.item.title"
        class="headerCatalogButton__image"
      />
      <span class="headerCatalogButton__text">{{ props.item.title }}</span>
    </div>
    <!-- Стрелка -->
    <svg
      v-if="props.item.details"
      class="headerCatalogButton__arrowBox"
      fill="none"
      viewBox="0 0 8 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        :class="[
          'headerCatalogButton__arrow',
          { headerCatalogButton__arrow_active: props.item.id === currentId },
        ]"
        d="M1 13L7 7L1 1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['showContent'])
const props = defineProps(['item', 'currentId', 'isButtonBackActive'])
</script>

<style scoped>
.headerCatalogButton {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 31px;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid var(--grey-thirdary);
  padding-left: 30px;
  padding-right: 30px;
}
.headerCatalogButton_active {
  background: var(--grey-thirdary);
  border-bottom: 1px solid var(--white-primary);
  cursor: auto;
}
.headerCatalogButton__textBox {
  display: flex;
  align-items: center;
  gap: 17px;
}
.headerCatalogButton__image {
  width: 24px;
  height: 24px;
  opacity: 0.5;
  transition: 0.3s ease all;
}
.headerCatalogButton__text {
  font-family: 'Maza';
  font-size: 16px;
  color: var(--grey-dark-primary);
  white-space: nowrap;
  transition: 0.3s ease all;
}
.headerCatalogButton__arrowBox {
  width: 8px;
  height: 14px;
}
.headerCatalogButton__arrow {
  stroke: var(--grey-dark-primary);
  transition: 0.3s ease all;
}
.headerCatalogButton__arrow_active {
  stroke: var(--blue-primary);
  stroke-width: 2px;
}
.headerCatalogButton:hover {
  background: var(--grey-thirdary);
  border-bottom: 1px solid var(--white-primary);
}
.headerCatalogButton:hover .headerCatalogButton__image {
  opacity: 1;
}
.headerCatalogButton:hover .headerCatalogButton__arrow {
  stroke: var(--blue-primary);
  stroke-width: 2px;
}
.headerCatalogButton_active:hover .headerCatalogButton__image {
  opacity: 0.5;
}

@media (max-width: 1279px) {
  .headerCatalogButton {
    gap: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media (max-width: 1023px) {
  .headerCatalogButton__textBox {
    gap: 10px;
  }
  .headerCatalogButton__image {
    width: 18px;
    height: 18px;
  }
  .headerCatalogButton__text {
    font-size: 14px;
  }
  .headerCatalogButton__arrowBox {
    width: 6px;
    height: 12px;
  }
}

@media (max-width: 767px) {
  .headerCatalogButton {
    background: var(--grey-primary);
    height: 48px;
    border-bottom: none;
    border-radius: 6px;
    padding-left: 12px;
    padding-right: 12px;
  }
  .headerCatalogButton__textBox {
    gap: 17px;
  }
  .headerCatalogButton__image {
    width: 24px;
    height: 24px;
  }
  .headerCatalogButton__text {
    font-size: 16px;
  }
  .headerCatalogButton__arrowBox {
    width: 8px;
    height: 14px;
  }
}
</style>
