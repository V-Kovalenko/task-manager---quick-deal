<template>
  <div class="todo-list">
    <TodoItem
      v-for="(item, index) in items"
      :key="item.id"
      :task="item.task"
      :number="index + 1"
      :id="item.id"
      @edit="emitEdit"
      @delete="emitDelete"
    />
    <TodoItemAdd
      @add="emitAdd"
    />
  </div>
</template>

<script>
import TodoItemEmitter from '@/mixins/TodoItemEmitter';
import TodoItem from './TodoItem.vue';
import TodoItemAdd from './TodoItemAdd.vue';

export default {
  name: 'TodoList',
  extends: TodoItemEmitter,
  components: {
    TodoItem,
    TodoItemAdd,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.todo-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-row-gap: 20px;
}
</style>
