<template>
  <div class="app">
    <h1 style="margin-bottom: 10px">Страница с постами</h1>
    <div class="app__buttons">
      <mod-button @click="showModal">Создать пост</mod-button>
      <mod-input v-model="searchQuery" placeholder="Поиск постов ..." />
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
    <div v-if="isPostsLoading">Загрузка...</div>
    <mod-pagination :currentPage="page" :totalPages="totalPages" @pageChange="changePage"/>
  </div>
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
        this.totlaPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch {
        alert("Ошибка сети");
      } finally {
        this.isPostsLoading = false;
      }
    },
    changePage(pageNumber) {
      this.page = pageNumber;
      this.fetchPosts()
    },
  },
  mounted() {
    this.fetchPosts();
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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.app {
  padding: 30px;
}

.app__buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.pagination {
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
}

.pagination__number {
  padding: 2px 5px;
  border: 2px solid teal;
  margin-right: 5px;
}

.pagination__number:last-child {
  margin-right: 0px;
}

.pagination__number-active {
  background-color: teal;
  color: #fff;
}
</style>