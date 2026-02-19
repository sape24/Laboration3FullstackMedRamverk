<script setup>
defineProps({
    books: Array
})

const emit = defineEmits(['delete-book'])
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
                <tr v-for="book in books" :key="book._id">
                    <td>{{ book.title }}</td>
                    <td>{{ book.author }}</td>
                    <td>{{ book.pages }}</td>
                    <td>
                        <button @click="$emit('delete-book', book._id)" class="btn btn-danger btn-sm">Radera</button>
                    </td>
                </tr>
            </tbody>
        </table> 
    </div>   
</template>

<style>
</style>