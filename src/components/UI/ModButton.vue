<template>
  <button class='button'>
    <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'mod-button'
};
</script>

<style scoped>
.button {
  display: block;
  background-color: teal;
  padding: 10px;
  border: none;
  color: #fff;
}
</style>