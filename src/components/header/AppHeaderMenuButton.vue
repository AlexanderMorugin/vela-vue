<template>
  <button
    class="headerMenuButton"
    :class="props.isMenuModalOpen ? 'headerMenuButton_close' : 'headerMenuButton_open'"
    @click="handleOpenModal"
  >
    <img
      :src="props.isMenuModalOpen ? ButtonMenuCloseImage : ButtonMenuOpenImage"
      alt="Кнопка меню"
      :class="['headerMenuButton__image', { headerMenuButton__image_close: props.isMenuModalOpen }]"
    />
  </button>
</template>

<script setup>
import ButtonMenuOpenImage from '../../img/img-header-menu-button.svg'
import ButtonMenuCloseImage from '../../img/img-header-menu-close.svg'

const emit = defineEmits(['openMenuModal', 'openMenuModalMobile'])
const props = defineProps(['isMenuModalOpen', 'isScreen'])

const handleOpenModal = () => {
  if (props.isScreen === 'desktop') emit('openMenuModal')
  if (props.isScreen === 'mobile') emit('openMenuModalMobile')
}
</script>

<style scoped>
.headerMenuButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 101px;
  height: 48px;
  border-radius: 8px;
}
.headerMenuButton_close {
  background: var(--grey-medium-thirdary);
}
.headerMenuButton_open {
  background: var(--blue-primary);
}
.headerMenuButton_open:hover {
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
.headerMenuButton__image_close {
  width: 24px;
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
    max-width: 40px;
    height: 40px;
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
