<script setup>
    import {RouterLink} from 'vue-router'
</script>   

<template> 
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark mb-4">
            <div class="container">
                <RouterLink class="navbar-brand" to="/">Laboration 3</RouterLink>

                <div class="navbar-nav">
                    <RouterLink class="nav-link" to="/">Hem</RouterLink>
                    <RouterLink class="nav-link" to="/books">Böcker</RouterLink>
                    <RouterLink class="nav-link" to="/about">Om</RouterLink>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
    .navbar {
        background-color: rgb(12, 201, 235);
        padding: 1%;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    .nav-link{
        font-size: 25px;
        color: white;
    }

    .navbar-brand{
        font-size: 30px;
    }
</style>