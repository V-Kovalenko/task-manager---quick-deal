<template>
  <div class="home">
    <h1 class="home__title">Тестовое задание QD REALTY</h1>
    <div class="home__task">
      <p v-for="item in text" :key="item">
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      text: [
        'Разработать простое приложение таск-менеджера с использованием Vue 2\n'
        + '      (можно использовать composition API),\n'
        + '      включая работу с vuex и vue-router.',
        'Приложение должно иметь главную страницу\n'
        + '      (на главной странице переход на страницу со списком задач,\n'
        + '      по желанию можете дать волю своей фантазии) и страницу со списком задач',
        'Задачи можно удалить и отредактировать.',
        'При обновлении страницы должны отображаться сохранённые задачи.',
      ],
    };
  },
};

</script>

<style lang="scss">
.home {
  width: 100%;

  &__title {
    margin-bottom: 15px;
  }

  &__task {
    display: flex;
    flex-direction: column;
    grid-row-gap: 5px;
  }
}
</style>
