<template>
  <button class="headerMenuButton">
    <img
      src="../../img/img-header-menu-button.svg"
      alt="Кнопка меню"
      class="headerMenuButton__image"
    />
  </button>
</template>

<script setup></script>

<style scoped>
.headerMenuButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 101px;
  height: 48px;
  background: var(--blue-primary);
  border-radius: 8px;
  margin-left: 25px;
  transition: 0.3s ease all;
}
.headerMenuButton:hover {
  background: var(--grey-dark-primary);
}
.headerMenuButton__image {
  width: 41px;
}
@media (max-width: 767px) {
  .headerMenuButton {
    width: 40px;
    height: 40px;
  }
  .headerMenuButton__image {
    width: 27px;
    height: 15px;
    object-fit: cover;
  }
}
</style>
