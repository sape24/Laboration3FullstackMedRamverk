<script setup>
defineProps({
    title: String,
    text: String
})
</script>

<template>
    <article class="article-box">
        <h2>{{ title }}</h2> 
        <p>{{ text }}</p>
    </article>
</template>

<style scoped>
    .article-box{
        background-color: rgb(12, 201, 235);
        padding: 3%;
        margin: 3%;
        border-radius: 15px;
        color: white;
        width: 50%;
        justify-self: center;
    }
    h2{
        justify-self: center;
    }
</style>