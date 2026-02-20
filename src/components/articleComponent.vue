<script setup>
defineProps({         //Tar emot titel och text via props vilket gör artikeln återanvändbar 
    title: String,
    text: String
})
</script>

<template>
    <article class="article-box">
        <h2>{{ title }}</h2>                       <!-- använder dubbla måsvingar för att skriva ut värdena som togs emot via props-->
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