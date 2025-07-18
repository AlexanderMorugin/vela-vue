<template>
  <main class="main">
    <div class="main__container">
      <div class="main__titleBox">
        <h1 class="main__title">Проект шапки сайта "Vela"</h1>
      </div>

      <div class="main__textBlock">
        <h2 class="main__subtitle">Что сделано:</h2>
        <p class="main__text">* Проект выполнен на фреймворке VUE 3;</p>
        <p class="main__text">
          * Адаптивная верстка (десктоп + мобильная версия). Минимальное количество брейкпоинтов
          ширины экрана (1440px, 1280px, 1024px, 768px, 340px). Минимальная ширина экрана
          предусматривается как 320px;
        </p>
        <p class="main__text">* Чистая, аккуратная структура HTML/CSS;</p>
        <p class="main__text">* Использованы Flexbox и Grid для построения сеток;</p>
        <p class="main__text">* Использован БЭМ-нейминг классов;</p>
        <p class="main__text">
          * Минимизировано использование сторонних библиотек (нет Bootstrap и подобных фреймворков);
        </p>
        <p class="main__text">* Настроена базовая сборка проекта через Webpack;</p>
        <p class="main__text">
          * Сделаны плавные анимации при наведении на элементы меню (hover-эффекты).
        </p>
      </div>
      <div class="main__textBlock">
        <h2 class="main__subtitle">Технические требования:</h2>
        <p class="main__text">* Валидная верстка (проверена через валидатор W3C);</p>
        <p class="main__text">
          * Корректное отображение в актуальных версиях браузеров (Chrome, Firefox, Safari);
        </p>
        <p class="main__text">* Стандартная кодировка — UTF-8;</p>
        <p class="main__text">
          * Папка проекта готова к развертыванию (index.html + папки css/js/img/fonts).
        </p>

        <p class="main__text">
          * Проект размещен на сайте GitHub -
          <a href="https://github.com/AlexanderMorugin/vela-vue" target="_blank"
            >https://github.com/AlexanderMorugin/vela-vue</a
          >
        </p>
        <p class="main__text">
          * Проект задеплоен на ресурс Vercel -
          <a href="https://vela-vue.vercel.app/" target="_blank">https://vela-vue.vercel.app/</a>
        </p>
      </div>

      <div class="main__textBlock">
        <h2 class="main__subtitle">Дополнительно:</h2>
        <p class="main__text">
          * Оформлен README-файл с коротким описанием (как собрать/запустить проект). Это на
          Гитхабе.
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr;
  background: var(--blue-primary);
}
.main__container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px;
}
.main__titleBox {
  width: 100%;
  height: fit-content;
  border-bottom: 4px solid var(--brown-primary);
}
.main__title {
  font-family: 'Maza';
  font-size: 32px;
  color: var(--white-primary);
  padding-bottom: 20px;
}
.main__subtitle {
  font-family: 'Maza';
  font-size: 24px;
  color: var(--white-primary);
}
.main__textBlock {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.main__text {
  font-family: 'Maza';
  font-size: 16px;
  color: var(--white-primary);
  padding-left: 20px;
  padding-right: 20px;
}

@media (max-width: 1023px) {
  .main__container {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width: 767px) {
  .main__container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
