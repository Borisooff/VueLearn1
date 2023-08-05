<template>
    <div class="navbar">
        <div @click="$router.push('/')">Posts</div>
        <div class="navbar__buttons">
            <mod-button @click="$router.push('/')">Главная</mod-button>
            <mod-button @click="$router.push('/posts')">Посты</mod-button>
            <mod-button @click="$router.push('/about')">О сайте</mod-button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .navbar{
        height: 50px;
        background-color: teal;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        padding: 0 15px;
    }

    .navbar__buttons {
        margin-left: auto;
    }
</style>