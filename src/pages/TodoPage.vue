<template>
  <div class="todo-page">
    <h1 class="todo-page__title">
      Todo list:
    </h1>
    <TodoList
      :items="todos"
      @edit="handleEditTask"
      @delete="handleDeleteTask"
      @add="handleAddTask"
    />
  </div>
</template>

<script>
import TodoList from '@/components/todo/TodoList.vue';

export default {
  name: 'TodoPage',
  components: {
    TodoList,
  },
  data() {
    return {
      todos: [],
      localStorageKey: 'todo-list',
    };
  },
  mounted() {
    this.todos = this.getTodosFromLocalStorage();
  },
  methods: {
    handleEditTask(id, text) {
      const todoItem = this.todos.find((it) => it.id === id);
      if (todoItem) {
        todoItem.task = text;
        this.updateTodosLocalStorage();
      }
    },
    handleDeleteTask(id) {
      this.todos = this.todos.filter((it) => it.id !== id);
      this.updateTodosLocalStorage();
    },
    handleAddTask(text) {
      const largestId = this.todos.reduce((acc, rec) => (rec.id > acc ? rec.id : acc), 0);
      const newTask = {
        id: largestId + 1,
        task: text,
      };
      this.todos.push(newTask);
      this.updateTodosLocalStorage();
    },
    getTodosFromLocalStorage() {
      const todosJson = localStorage.getItem(this.localStorageKey);
      if (!todosJson) {
        return [];
      }
      try {
        return JSON.parse(todosJson);
      } catch (e) {
        return [];
      }
    },
    updateTodosLocalStorage() {
      const jsonArray = JSON.stringify(this.todos);
      localStorage.setItem(this.localStorageKey, jsonArray);
    },
  },
};
</script>

<style lang="scss">
.todo-page {
  width: 100%;
  &__title {
    margin-bottom: 20px;
  }
}
</style>
