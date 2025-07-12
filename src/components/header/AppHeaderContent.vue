<template>
  <div class="headerContent">
    <div class="headerContent__container">
      <AppHeaderLogo />
      <AppHeaderMenuButton />
      <AppHeaderSearch />

      <AppHeaderLang />

      <AppHeaderSocials />
    </div>
  </div>
</template>

<script setup>
import AppHeaderLogo from './AppHeaderLogo.vue'
import AppHeaderMenuButton from './AppHeaderMenuButton.vue'
import AppHeaderSearch from './AppHeaderSearch.vue'
import AppHeaderLang from './AppHeaderLang.vue'
import AppHeaderSocials from './AppHeaderSocials.vue'
</script>

<style scoped>
.headerContent {
  background: var(--white-primary);
}
.headerContent__container {
  display: flex;
  align-items: center;
  max-width: 1440px;
  height: 100px;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
  border: 1px solid red;
}
</style>
