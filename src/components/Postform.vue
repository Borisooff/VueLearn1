<template >
  <div>
    <h3>Создать пост</h3>
    <form @submit.prevent>
      <mod-input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Название"
      />
      <mod-input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Описание"
      />
      <mod-button  @click="createPost" style="margin-left: auto; margin-top: 10px">
        Создать
      </mod-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      if (this.post.title !== "" && this.post.body !== "") {
        this.post.id = Date.now();
        this.$emit("create", this.post);
        this.post = {
          title: "",
          body: "",
        };
      }
    },
  },
};
</script>

<style scoped>

</style>
