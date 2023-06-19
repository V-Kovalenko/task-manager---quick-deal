<template>
  <header class="header">
    <img class="header__logo" alt="logo" src="@/assets/images/logo/logo.png"/>
    <AppNavigation/>
  </header>
</template>

<script>
import AppNavigation from './AppNavigation.vue';

export default {
  name: 'AppHeader',
  components: {
    AppNavigation,
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  display: flex;
  grid-column-gap: 20px;
}
</style>
