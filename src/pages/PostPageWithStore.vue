<template>
  <h1 style="margin-bottom: 10px">Страница с постами</h1>
  <div class="app__buttons">
    <mod-button @click="showModal">Создать пост</mod-button>
    <mod-input
      v-focus
      @update:model-value="setSearchQuery"
      placeholder="Поиск постов ..."
    />
    <mod-select
      :model-value="selectedSort"
      :options="sortOptions"
      @update:model-value="setSelectedSort"
    />
  </div>
  <mod-modal v-model:show="modalVisible">
    <post-form @create="createPost" />
  </mod-modal>
  <post-list
    :posts="sortedAndSearchedPosts"
    @delete="deletePost"
    v-if="!isPostsLoading"
  />
  <!-- <div ref="observer" class="obsever"></div> -->
  <div v-intersection="loadMorePosts" class="observer"></div>
  <div v-if="isPostsLoading">Загрузка...</div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

import PostForm from "@/components/Postform.vue";
import PostList from "@/components/PostList";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modalVisible = false;
    },
    deletePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showModal() {
      this.modalVisible = true;
    },
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort"
    }),
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPost",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style >
</style>