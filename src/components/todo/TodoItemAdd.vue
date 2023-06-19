<template>
  <div class="todo-add">
    <div class="todo-add__number"></div>
    <div class="todo-add__task">
      <input
        class="todo-add__input"
        v-model="todoModel"
        @keydown.enter="handleAdd"
      />
    </div>
    <button
      class="todo-add__button"
      :disabled="!todoModel"
      @click="handleAdd"
    >
      Add new task
    </button>
  </div>
</template>

<script>
import TodoItemEmitter from '@/mixins/TodoItemEmitter';

export default {
  name: 'TodoItemAdd',
  extends: TodoItemEmitter,
  data() {
    return {
      todoModel: '',
    };
  },
  methods: {
    handleAdd() {
      if (!this.todoModel) {
        return;
      }
      this.emitAdd(this.todoModel);
      this.todoModel = '';
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/mixins';

.todo-add {
  @include todo-item;
  &__button {
    color: $turquoise;

    &:disabled {
      color: $dark-grey;
      &:hover {
        color: $dark-grey;
      }
    }

    &:hover {
      color: $water;
    }
  }

}
</style>
