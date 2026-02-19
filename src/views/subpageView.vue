<script setup>
import {ref, onMounted} from 'vue'
import BookForm from '@/components/formComponent.vue'
import BookList from '@/components/tableComponent.vue'

const books = ref([])

const getBooks = async () =>{
    const resp = await fetch('https://laboration2-2fullstackutveckling.onrender.com/books')
    const data = await resp.json()
    books.value = data
}

const addBook = async (bookData) => {
    try{
        const resp = await fetch('https://laboration2-2fullstackutveckling.onrender.com/books', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bookData)
        })    

        console.log("Statuskod:", resp.status)

        if (!resp.ok) {
            const errorData = await resp.json()
            console.error("Fel från servern:", errorData)
        } else {
            console.log("Sparat")
            getBooks()
        }
    }  catch (error) {
        console.error("Nätverksfel:", error)
    }      

    
}

const deleteBook = async(id) => {
    try{
        const resp = await fetch(`https://laboration2-2fullstackutveckling.onrender.com/books/${id}`, {
        method:'DELETE'
        })

        console.log("Statuskod:", resp.status)

        if (!resp.ok) {
            console.log("Kunde inte radera boken")
        } else {
            console.log("Boken raderad")
            getBooks()
        }
    } catch (error) {
        console.error("Nätverksfel:", error)
    }
}

onMounted(() => {
    getBooks()
})
</script>

<template>
    <div class="container mt-4">
        <h1>Boklista</h1>
        <BookList :books="books" @delete-book="deleteBook"/>

         <BookForm @add-book="addBook"/>
    </div>
</template>

<style>
</style>