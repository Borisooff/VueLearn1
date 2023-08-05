<template >
  <h1 style="margin-bottom: 10px">Страница с постами</h1>
  <div class="app__buttons">
    <mod-button @click="showModal">Создать пост</mod-button>
    <mod-input  v-focus v-model="searchQuery" placeholder="Поиск постов ..." />
    <mod-select v-model="selectedSort" :options="sortOptions" />
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
  <!-- <mod-pagination :currentPage="page" :totalPages="totalPages" @change="changePage"/> -->
</template>

<script>
import axios from "axios";

import PostForm from "@/components/Postform.vue";
import PostList from "@/components/PostList";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      modalVisible: false,
      isPostsLoading: true,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
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
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch {
        alert("Ошибка сети");
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totlaPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch {
        alert("Ошибка сети");
      } 
    },
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    //   this.fetchPosts()
    // },
  },
  mounted() {
    this.fetchPosts();

    // let options = {
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // };

    // let callback = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts();
    //   }
    // };

    // let observer = new IntersectionObserver(callback, options);

    // observer.observe(this.$refs.observer);
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style >
</style>