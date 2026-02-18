<script setup>
import articleComponent from '@/components/articleComponent.vue';
</script>

<template>
    <div class="home-wrapper">
        <div class="banner">
            <img src="../images/bookbanner.jpg" alt="Bokbanner">
        </div>

        <div class="container mt-4">
            <articleComponent
                title="Böcker"
                text="Läsning är mitt sätt att koppla av. Jag läser allt från klassiker till modern sci-fi. Denna webbplats är mitt egna system för att logga titlar jag läst samt vill läsa. Databasen sparar även sidor och författare för framtida utveckling av sidan som till exempel sortera titlar med författare."
            />
        </div>
    </div>
</template>

<style scoped>

.banner{
    width: 100%;
    height: 200px;
}

.banner img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>