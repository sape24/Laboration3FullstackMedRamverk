<script setup>
defineProps({
    books: Array             //tar emot arrayen med böcker via props
})

const emit = defineEmits(['delete-book'])     //definierar en emit kunna skicka event till viewen
</script>

<template>
    <div class="table-responsive">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Titel</th>
                    <th>Författare</th>
                    <th>Antal sidor</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books" :key="book._id">                   <!-- loopar igenom arrayen med v-for  och använder databasens _id som key för att vue ska kunna uppdatera listan-->
                    <td>{{ book.title }}</td>
                    <td>{{ book.author }}</td>
                    <td>{{ book.pages }}</td>
                    <td>
                        <button @click="$emit('delete-book', book._id)" class="btn btn-danger btn-sm">Radera</button>       <!-- vid klick skivas en emit till viewen med bokens id så rätt bok raderas-->
                    </td>
                </tr>
            </tbody>
        </table> 
    </div>   
</template>

<style>
</style>