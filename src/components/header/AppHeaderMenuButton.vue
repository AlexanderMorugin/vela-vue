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
  transition: 0.3s ease all;
}
.headerMenuButton:hover {
  animation: shine 3s forwards;
  background-image: -webkit-gradient(
    linear,
    left center,
    right center,
    from var(--blue-primary),
    color-stop(0.5, #c1d4f7),
    to var(--blue-primary)
  );
  background-image: -webkit-linear-gradient(
    left,
    var(--blue-primary) 0%,
    #c1d4f7 50%,
    var(--blue-primary) 100%
  );
}
.headerMenuButton__image {
  width: 41px;
}

@media (max-width: 1023px) {
  .headerMenuButton {
    max-width: 48px;
    height: 40px;
  }
  .headerMenuButton__image {
    width: 27px;
    height: 15px;
    object-fit: cover;
  }
}

@media (max-width: 767px) {
  .headerMenuButton {
    margin-left: 0;
  }
}

@keyframes shine {
  0% {
    background-position: -101px 0;
  }
  100% {
    background-position: 101px 0;
  }
}
</style>
