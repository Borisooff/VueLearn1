<template>
  <div class="post">
    <div class="post__content">
      <div>
        <strong>Название:</strong>
        {{ post.title }}
      </div>
      <div>
        <strong>Описание:</strong>
        {{ post.body }}
      </div>
    </div>
    <mod-button @click="$emit('delete', post)" style='margin-left: auto' class="button-delete"> Удалить </mod-button>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 10px;
  display: flex;
}

.post__content {
  display: flex;
  flex-direction: column;
}

.button-delete {
  background-color: rgb(185, 64, 64) !important;
}
</style>