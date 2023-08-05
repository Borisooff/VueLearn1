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
  background-color: teal;
  padding: 10px;
  border: none;
  color: #fff;
  cursor: pointer;
}
</style>