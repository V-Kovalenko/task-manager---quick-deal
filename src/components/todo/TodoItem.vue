<template>
  <div
    ref="container"
    class="todo-item"
    :style="containerStyle"
  >
    <div class="todo-item__number">{{ number }}</div>
    <div class="todo-item__task">
      <input
        ref="input"
        v-if="rowMode === 'edit'"
        class="todo-item__input"
        v-model="todoModel"
        @keydown.enter="handleSave"
        @keydown.esc="handleCancel"
      />
      <p
        v-else
        class="todo-item__text"
      >
        {{ task }}
      </p>
    </div>
    <div class="todo-item__buttons">
      <button
        v-if="rowMode === 'view'"
        class="todo-item__button"
        @click="handleEdit"
      >
        Edit
      </button>
      <button
        v-else
        class="todo-item__button"
        @click="handleSave"
      >
        Save
      </button>
      <button
        class="todo-item__button todo-item__button_delete"
        @click="handleDelete"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import TodoItemEmitter from '@/mixins/TodoItemEmitter';

export default {
  name: 'TodoItem',
  extends: TodoItemEmitter,
  props: {
    number: {
      type: Number,
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      rowMode: 'view',
      todoModel: '',
      elementHeight: '0',
    };
  },
  computed: {
    containerStyle() {
      if (this.rowMode !== 'edit') {
        return {};
      }
      return {
        height: `${this.elementHeight}px`,
      };
    },
  },
  mounted() {
    this.updateElementHeight();
  },
  methods: {
    handleChangeMode(mode) {
      this.rowMode = mode;
    },
    handleEdit() {
      this.handleChangeMode('edit');
      this.$nextTick(() => {
        this.handleFocusInput();
      });
    },
    handleCancel() {
      this.todoModel = this.task;
      this.handleChangeMode('view');
    },
    handleSave() {
      this.emitEdit(this.id, this.todoModel);
      this.handleChangeMode('view');
      this.$nextTick(() => {
        this.updateElementHeight();
      });
    },
    handleDelete() {
      this.emitDelete(this.id);
    },
    handleFocusInput() {
      this.$refs.input.focus();
    },
    updateElementHeight() {
      this.elementHeight = this.$refs.container.offsetHeight;
    },
  },
  watch: {
    task: {
      immediate: true,
      handler(value) {
        this.todoModel = value;
      },
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/mixins';

.todo-item {
  @include todo-item;

  &__text {
    padding: 5px 0;
    word-break: break-word;
  }

  &__buttons {
    display: flex;
    grid-column-gap: 20px;
  }

  &__button {
    color: $white;

    &:hover {
      color: $light-grey;

    }

    &_delete {
      color: $alert;

      &:hover {
        color: $peach;
      }
    }
  }

}
</style>
