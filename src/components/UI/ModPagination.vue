<template >
  <div class="pagination">
    <div
      class="pagination__number"
      :class="{
        'pagination__number-active': page === pageNumber,
      }"
      v-for="pageNumber in totlaPages"
      :key="pageNumber"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
    name: 'mod-pagination',
    props:{
      totalPages:{
        type: Number,
      },
      currentPage:{
        type: Number,
      }
    },
    methods:{
      changePage(pageNumber){
        this.$emit('page-change', pageNumber)
      }
    }
};
</script>

<style scoped>
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