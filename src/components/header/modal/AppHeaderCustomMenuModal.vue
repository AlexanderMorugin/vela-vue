<template>
  <div class="headerCustomMenuModal">
    <ul class="headerCustomMenuModal__list">
      <li v-for="item in props.data" :key="item.id">
        <button class="headerCustomMenuModal__listItem" @click="$emit('goToPage')">
          {{ item.title }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps(['data'])
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['goToPage'])
</script>

<style scoped>
.headerCustomMenuModal {
  position: absolute;
  top: 58px;
  left: 0;
  display: flex;
  width: 204px;
  background: var(--white-primary);
  border-radius: 8px;
  box-shadow: rgba(157, 157, 157, 0.35) 0px 0px 10px 0px;
  -webkit-box-shadow: rgba(157, 157, 157, 0.35) 0px 0px 10px 0px;
  -moz-box-shadow: rgba(157, 157, 157, 0.35) 0px 0px 10px 0px;
  padding: 24px;
  z-index: 10;
  animation: slide-down 0.3s ease-in-out;
}
.headerCustomMenuModal__list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
.headerCustomMenuModal__listItem {
  font-family: 'Maza';
  font-size: 16px;
  line-height: 20px;
  color: var(--grey-dark-primary);
  transition: 0.3s ease all;
}
.headerCustomMenuModal__listItem:hover {
  color: var(--blue-primary);
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
</style>
