<template>
  <div class="headerWorkTime">
    <!-- Иконка Часов -->
    <svg
      v-if="props.img === 'ImageClock'"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="headerWorkTime__image"
        d="M5.5 0C2.46721 0 0 2.46721 0 5.5C0 8.53279 2.46721 11 5.5 11C8.53279 11 11 8.53279 11 5.5C11 2.46721 8.53279 0 5.5 0ZM8.11571 8.34488C8.07324 8.38759 8.02275 8.42148 7.96714 8.44461C7.91153 8.46774 7.8519 8.47964 7.79167 8.47964C7.73144 8.47964 7.6718 8.46774 7.61619 8.44461C7.56058 8.42148 7.51009 8.38759 7.46762 8.34488L5.17596 6.05321C5.13331 6.01072 5.09949 5.96021 5.07645 5.9046C5.0534 5.84899 5.04158 5.78937 5.04167 5.72917V2.75C5.04167 2.62844 5.08996 2.51186 5.17591 2.42591C5.26186 2.33996 5.37844 2.29167 5.5 2.29167C5.62156 2.29167 5.73814 2.33996 5.82409 2.42591C5.91004 2.51186 5.95833 2.62844 5.95833 2.75V5.53942L8.11571 7.69679C8.15831 7.73932 8.19211 7.78983 8.21516 7.84543C8.23822 7.90104 8.25009 7.96064 8.25009 8.02083C8.25009 8.08103 8.23822 8.14063 8.21516 8.19623C8.19211 8.25184 8.15831 8.30235 8.11571 8.34488Z"
      />
    </svg>

    <span class="headerWorkTime__text">{{ props.days }}</span>
    <span class="headerWorkTime__text">{{ props.hours }}</span>
  </div>
</template>

<script setup>
const props = defineProps(['img', 'days', 'hours'])
</script>

<style scoped>
.headerWorkTime {
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
}
.headerWorkTime__text {
  font-family: 'Maza';
  font-size: 14px;
  color: var(--grey-dark-primary);
}

.headerWorkTime__image {
  fill: var(--grey-dark-primary);
  fill-opacity: 0.5;
  transition: 0.3s ease all;
}

@media (max-width: 767px) {
  .headerWorkTime {
    gap: 10px;
    cursor: pointer;
  }
  .headerWorkTime__text {
    font-size: 16px;
    transition: 0.3s ease all;
  }
  .headerWorkTime:hover .headerWorkTime__text {
    color: var(--blue-primary);
  }
  .headerWorkTime:hover .headerWorkTime__image {
    fill: var(--blue-primary);
    fill-opacity: 1;
  }
}
</style>
