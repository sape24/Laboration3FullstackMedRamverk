<script setup>
    import { RouterView } from 'vue-router';
    import AppHeader from './components/headerComponent.vue'
</script>

<template>
    <AppHeader/>

    <main class="container">
        <RouterView/>
    </main>
</template>

<style scoped>
</style>