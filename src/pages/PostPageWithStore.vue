<template>
  <div>
    <h1>{{ $store.getters.doubleLikes }}</h1>
    <h2>
      {{
        $store.state.isAuth
          ? "Пользователь авторизован"
          : "Пользователь не авторизован"
      }}
    </h2>
    <mod-button @click="$store.commit('userEscape')" v-if="$store.state.isAuth">
      Выйти
    </mod-button>
    <mod-button @click="$store.commit('userAuth')" v-else> Войти</mod-button>

    <mod-button @click="$store.commit('incrementLikes')">Лайк</mod-button>
    <mod-button @click="$store.commit('decrimentLikes')">Дизлайк</mod-button>
  </div>
</template>

<script>
export default {};
</script>

<style >
</style>