<template>
  <nav-bar/>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components:{
        NavBar
    }
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
</style>