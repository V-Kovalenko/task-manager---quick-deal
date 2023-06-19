<template>
  <nav class="navigation">
    <router-link
      v-for="item in navItems"
      :key="item.path"
      :to="item.path"
      class="navigation__link"
    >
      {{ item.title }}
    </router-link>
  </nav>
</template>

<script>

export default {
  name: 'AppNavigation',
  data() {
    return {
      navItems: [
        {
          title: 'Home Page',
          path: '/',
        },
        {
          title: 'Todo Page',
          path: '/todo',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
.navigation {
  display: flex;
  grid-column-gap: 20px;
  align-items: center;

  &__link {
    padding: 10px 20px;

    &:hover {
      color: $light-grey;
    }
  }
}
</style>
