<template>
  <h3 style="margin-bottom: 10px">Список постов</h3>
  <transition-group name="posts-list">
    <post-item
      v-show="posts.length > 0"
      :post="post"
      v-for="post in posts"
      :key="post.id"
      @delete="$emit('delete', post)"
    />
  </transition-group>
  <h2 v-show="posts.length <= 0">Список постов пуст</h2>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.posts-list-item {
  display: inline-block;
  margin-right: 10px;
}

.posts-list-enter-active,
.posts-list-leave-active {
  transition: all 0.3s ease;
}

.posts-list-enter-from,
.posts-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.posts-list-move{
  transition: transform 0.5s ease;
}
</style>