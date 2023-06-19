<template>
  <div class="highlights">
    <img alt="highlights" src="@/assets/images/highlight.png" />
  </div>
</template>

<script>
export default {
  name: 'AppHighlight',
};
</script>

<style lang="scss">
.highlights {
  height: 600px;
  width: 600px;
  position: absolute;
  left: -330px;
  top: -330px;
  pointer-events: none;
}
</style>
