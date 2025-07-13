<template>
  <button class="headerSquareButton">
    <!-- Картинка для кнопки Избранные -->
    <svg
      v-if="props.name === 'favorite'"
      class="headerSquareButton__imageBox headerSquareButton__image"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.0397 2.8001C16.0079 2.81615 14.9986 3.10418 14.1137 3.6351C13.2289 4.16602 12.4998 4.92103 12 5.82389C11.5003 4.92103 10.7712 4.16602 9.88635 3.6351C9.00149 3.10418 7.99219 2.81615 6.96039 2.8001C5.31558 2.87156 3.7659 3.5911 2.64991 4.80151C1.53393 6.01193 0.942356 7.61482 1.00444 9.26002C1.00444 13.4264 5.38985 17.9768 9.06788 21.062C9.88909 21.7521 10.9274 22.1304 12 22.1304C13.0727 22.1304 14.111 21.7521 14.9322 21.062C18.6102 17.9768 22.9956 13.4264 22.9956 9.26002C23.0577 7.61482 22.4662 6.01193 21.3502 4.80151C20.2342 3.5911 18.6845 2.87156 17.0397 2.8001Z"
      />
    </svg>

    <!-- Картинка для кнопки Профиль -->
    <svg
      v-if="props.name === 'profile'"
      class="headerSquareButton__imageBox"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2_1998)">
        <path
          class="headerSquareButton__image"
          d="M9.36193 11.1722H7.70676C7.47845 11.1722 7.29297 11.3577 7.29297 11.586V11.9998H9.77573V11.586C9.77573 11.3581 9.59045 11.1722 9.36193 11.1722Z"
        />
        <path
          class="headerSquareButton__image"
          d="M13.9136 7.44815H13.086V10.3446C13.086 11.6492 12.5312 12.8241 11.6484 13.6549H13.9136V7.44815Z"
        />
        <path
          class="headerSquareButton__image"
          d="M6.29391 18.3759L7.78846 17.379L5.98478 16.1766L5.69141 16.266L6.29391 18.3759Z"
        />
        <path
          class="headerSquareButton__image"
          d="M12.6241 14.4825H11.4316V15.4119L12.0685 15.594L12.6241 14.4825Z"
        />
        <path
          class="headerSquareButton__image"
          d="M12.2588 7.44815H4.81055V10.3446C4.81055 12.3982 6.48107 14.0687 8.53468 14.0687C10.5883 14.0687 12.2588 12.3982 12.2588 10.3446V7.44815ZM6.05193 8.6895C6.05193 8.4612 6.23741 8.27572 6.46572 8.27572C6.69423 8.27572 6.87951 8.4612 6.87951 8.6895C6.87951 8.91781 6.69423 9.10329 6.46572 9.10329C6.23741 9.10329 6.05193 8.91842 6.05193 8.6895ZM10.6037 12.8274H6.46572V11.586C6.46572 10.9017 7.02276 10.3446 7.7071 10.3446H9.36227C10.0466 10.3446 10.6037 10.9017 10.6037 11.586V12.8274ZM10.6037 9.10329C10.3753 9.10329 10.1899 8.91781 10.1899 8.6895C10.1899 8.4612 10.3753 8.27572 10.6037 8.27572C10.8322 8.27572 11.0174 8.4612 11.0174 8.6895C11.0174 8.91842 10.8322 9.10329 10.6037 9.10329Z"
        />
        <path
          class="headerSquareButton__image"
          d="M15.527 0.413788H15.1551C14.1557 0.413788 13.3199 1.12599 13.1279 2.06893H13.4999C14.4992 2.06893 15.3351 1.35713 15.527 0.413788Z"
        />
        <path
          class="headerSquareButton__image"
          d="M14.7419 4.55165H14.3578L2.32812 5.75401V6.62058H14.7419V4.55165Z"
        />
        <path
          class="headerSquareButton__image"
          d="M11.0173 3.31029C11.0173 2.62596 11.5744 2.06893 12.2587 2.06893C12.2698 2.06893 12.2803 2.07176 12.2914 2.07216C12.2922 2.06529 12.2934 2.05863 12.2947 2.05155C11.5519 0.785749 10.1996 0 8.72488 0C7.02041 0 5.50929 1.02295 4.87628 2.60556C4.56755 3.37696 4.16608 4.10674 3.68945 4.78622L11.2523 4.03158C11.1058 3.82792 11.0173 3.58002 11.0173 3.31029Z"
        />
        <path
          class="headerSquareButton__image"
          d="M12.6723 3.31029C12.6723 3.5388 12.487 3.72408 12.2585 3.72408C12.03 3.72408 11.8447 3.5388 11.8447 3.31029C11.8447 3.08178 12.03 2.8965 12.2585 2.8965C12.487 2.8965 12.6723 3.08178 12.6723 3.31029Z"
        />
        <path
          class="headerSquareButton__image"
          d="M9.28125 17.379L10.7758 18.3759L11.3807 16.2581L11.0882 16.1744L9.28125 17.379Z"
        />
        <path
          class="headerSquareButton__image"
          d="M13.914 14.4825H13.5491L12.8779 15.8253L13.5204 16.0085L13.6215 15.6378L16.0711 16.2502L15.9238 16.8381C16.2796 17.0723 16.5764 17.375 16.794 17.7277L17.98 15.3555L14.7097 13.8689C14.6145 14.2215 14.2955 14.4825 13.914 14.4825Z"
        />
        <path
          class="headerSquareButton__image"
          d="M15.6943 17.7005C15.3011 19.1218 14.7014 20.458 13.9141 21.6783V24H16.3968V19.2518C16.3968 18.6452 16.1354 18.087 15.6943 17.7005Z"
        />
        <path
          class="headerSquareButton__image"
          d="M13.0864 23.9996V22.8298C12.7641 23.2353 12.4251 23.6288 12.0586 24H13.0864V23.9996Z"
        />
        <path
          class="headerSquareButton__image"
          d="M15.067 16.8527L14.2063 16.6375L14.1578 16.8155C13.4262 19.4976 11.947 21.8983 9.88042 23.7583L9.6123 23.9996H10.8529C12.895 22.1743 14.3275 19.8108 14.9928 17.1497L15.067 16.8527Z"
        />
        <path
          class="headerSquareButton__image"
          d="M2.14052 17.3439C1.26283 17.6104 0.672852 18.406 0.672852 19.3239V24H3.15561V20.8491C3.15561 19.6067 2.95154 18.389 2.54906 17.2206L2.14052 17.3439Z"
        />
        <path
          class="headerSquareButton__image"
          d="M13.2947 16.805L12.1757 16.4852L11.2593 19.6928L8.94824 18.1524V23.4844L9.32688 23.1435C11.2217 21.4383 12.5863 19.2489 13.2947 16.805Z"
        />
        <path
          class="headerSquareButton__image"
          d="M4.89864 16.5064L3.33984 16.9798C3.76576 18.226 3.98256 19.5245 3.98256 20.8485V23.9996H8.12049V18.1524L5.80947 19.6928L4.89864 16.5064Z"
        />
        <path
          class="headerSquareButton__image"
          d="M3.98286 10.3446V7.44815H3.15527V13.6549H5.42043C4.53768 12.8245 3.98286 11.6492 3.98286 10.3446Z"
        />
        <path
          class="headerSquareButton__image"
          d="M10.6038 14.394C9.98225 14.713 9.27994 14.8963 8.53479 14.8963C7.78963 14.8963 7.08732 14.7126 6.46582 14.394V15.5024L8.53479 16.8816L10.6038 15.5024V14.394Z"
        />
        <path
          class="headerSquareButton__image"
          d="M21.3631 8.62122L20.4814 6.83818L18.9743 9.44758L19.4291 11.1437L18.1348 13.3852L15.5949 12.2134L17.0829 9.63588L18.7785 9.18148L20.2852 6.57168L18.3003 6.69998L17.4189 4.91654L15.9119 7.52634L16.3663 9.22169L14.84 11.8648L14.7412 11.819V12.9747L18.6872 14.7684L19.146 13.8519L18.8894 13.7335L20.1462 11.5575L21.8416 11.1027L23.3484 8.49332L21.3631 8.62122Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_1998">
          <rect class="headerSquareButton__imageBox" fill="white" />
        </clipPath>
      </defs>
    </svg>

    <!-- Картинка для кнопки Корзина -->
    <svg
      v-if="props.name === 'cart'"
      class="headerSquareButton__imageBox"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="headerSquareButton__image"
        d="M0.703125 10.1939H0V16.3633C0.924844 16.4212 1.78777 16.7109 2.53125 17.1751V10.1939H0.703125Z"
      />
      <path
        class="headerSquareButton__image"
        d="M19.5619 2.54672H4.43813C1.99092 2.54672 0 4.53764 0 6.98484V8.78766H0.703125H3.9375H9.15244V7.48298H14.8476V8.78766H20.0625H23.2969H24V6.98484C24 4.53764 22.0091 2.54672 19.5619 2.54672Z"
      />
      <path
        class="headerSquareButton__image"
        d="M14.8476 10.1939V10.9733C14.8476 11.2286 14.8133 11.4759 14.75 11.7115H20.0625V10.1939H14.8476Z"
      />
      <path
        class="headerSquareButton__image"
        d="M23.2969 10.1939H21.4688V17.1751C22.2122 16.7109 23.0752 16.4212 24 16.3633V10.1939H23.2969Z"
      />
      <path
        class="headerSquareButton__image"
        d="M13.8704 13.1178C13.3696 13.5551 12.7155 13.8209 12 13.8209C11.2845 13.8209 10.6304 13.5551 10.1296 13.1178H3.9375V18.4364C4.59966 19.2781 5.01895 20.3193 5.08992 21.4533H18.9101C18.981 20.3192 19.4003 19.2781 20.0625 18.4364V13.1178H13.8704Z"
      />
      <path
        class="headerSquareButton__image"
        d="M20.3203 21.4533H23.9995V17.7741C22.0465 17.9395 20.4858 19.5002 20.3203 21.4533Z"
      />
      <path
        class="headerSquareButton__image"
        d="M0 17.7741V21.4533H3.67922C3.51375 19.5002 1.95305 17.9395 0 17.7741Z"
      />
      <path
        class="headerSquareButton__image"
        d="M9.15244 10.9733V10.1939H3.9375V11.7115H9.25003C9.18675 11.4759 9.15244 11.2286 9.15244 10.9733Z"
      />
      <path
        class="headerSquareButton__image"
        d="M10.5586 8.88928V10.9734C10.5586 11.7681 11.2052 12.4147 11.9999 12.4147C12.7946 12.4147 13.4412 11.7682 13.4412 10.9734V8.88928H10.5586Z"
      />
    </svg>
  </button>
</template>

<script setup>
const props = defineProps(['name'])
</script>

<style scoped>
.headerSquareButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 1px solid var(--grey-medium-secondary);
  border-radius: 4px;
  transition: 0.3s ease all;
}
.headerSquareButton:hover {
  border: 1px solid var(--brown-primary);
}
.headerSquareButton__imageBox {
  width: 24px;
  height: 24px;
}
.headerSquareButton:hover .headerSquareButton__imageBox {
  animation: scale 300ms ease-in-out;
}
.headerSquareButton__image {
  fill: var(--grey-dark-primary);
  transition: 0.3s ease all;
}
.headerSquareButton:hover .headerSquareButton__image {
  fill: var(--blue-primary);
}

@media (max-width: 767px) {
  .headerSquareButton {
    width: 40px;
    height: 40px;
  }
  .headerSquareButton__imageBox {
    width: 20px;
    height: 20px;
  }
}

@keyframes scale {
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
}
</style>
