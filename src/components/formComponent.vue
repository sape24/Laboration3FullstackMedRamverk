<script setup>   
import {ref} from 'vue'

const emit = defineEmits(['add-book']) //Deinierar en emit för att kunna skicka den nya bokens data till en view

const title = ref('')       //skapar reaktiva variablar för formuläret som binds med vmodel
const author = ref('')
const pages = ref(0)
const isRead = ref(false)

const submitForm = () => {
    emit('add-book', {                  //skickar iväg all ifylld data som ett objekt till viewen och tömmer sedan alla fälten
        title: title.value,
        author: author.value,
        pages: pages.value,
        isRead: isRead.value
    })

    title.value = ''
    author.value = ''
    pages.value = 0
    isRead.value = false
}
</script>

<template>
    <form @submit.prevent="submitForm">  <!-- Lyssnar på submit prevent stoppar sidan från att laddas om-->
        <div class="mb-3">
            <label for="title" class="form-label">Titel:</label>
            <input v-model="title" type="text" class="form-control" id="title" required>
        </div>
        <div class="mb-3">
             <label for="author" class="form-label">Författare:</label>
             <input v-model="author" type="text" class="form-control" id="author" required>
        </div>
        <div class="mb-3">
             <label for="pages" class="form-label">Antal sidor:</label>
             <input v-model.number="pages" type="number" class="form-control" id="pages" required>
        </div>
        <button type="submit" class="btn btn-success">Lägg till bok</button>
    </form>
</template>

<style scoped>
</style>