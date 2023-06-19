<template>
  <div class="layout">
    <AppHighlight />
    <AppHeader/>
    <main class="layout__content">
      <router-view/>
    </main>
  </div>
</template>
<script>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppHighlight from '@/components/layout/AppHighlight.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppHighlight,
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
.layout {
  position: relative;
  max-width: 1920px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 25px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &__content {
    display: flex;
    width: 100%;
    flex-grow: 1;
  }
}
</style>
