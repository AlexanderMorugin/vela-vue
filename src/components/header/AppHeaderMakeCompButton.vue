<template>
  <button class="headerMakeCompButton">
    <!-- Картинка крестика -->
    <svg
      class="headerMakeCompButton__imageBox"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="headerMakeCompButton__image"
        d="M8 3.33333V12.6667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        class="headerMakeCompButton__image"
        d="M3.3335 8H12.6668"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span class="headerMakeCompButton__text">Собрать компьютер</span>
  </button>
</template>

<style scoped>
.headerMakeCompButton {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  width: 100%;
  height: 42px;
  background: var(--grey-primary);
  border-radius: 8px;
  padding-left: 6px;
  padding-right: 6px;
  transition: 0.3s ease all;
}
.headerMakeCompButton__imageBox {
  width: 16px;
  height: 16px;
}
.headerMakeCompButton__image {
  stroke: var(--blue-primary);
  transition: 0.3s ease all;
}
.headerMakeCompButton__text {
  font-family: 'Maza';
  font-size: 16px;
  color: var(--blue-primary);
  transition: 0.3s ease all;
}
.headerMakeCompButton:hover {
  background: var(--blue-primary);
}
.headerMakeCompButton:hover .headerMakeCompButton__image {
  stroke: var(--white-primary);
}
.headerMakeCompButton:hover .headerMakeCompButton__text {
  color: var(--white-primary);
}

@media (max-width: 1279px) {
  .headerMakeCompButton__text {
    font-size: 13px;
  }
}

@media (max-width: 1023px) {
  .headerMakeCompButton__imageBox {
    display: none;
  }
}
</style>
