export default {
  methods: {
    emitEdit(id, text) {
      this.$emit('edit', id, text);
    },
    emitDelete(id) {
      this.$emit('delete', id);
    },
    emitAdd(text) {
      this.$emit('add', text);
    },
  },
};
