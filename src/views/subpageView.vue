<script setup>
import {ref, onMounted} from 'vue'
import BookForm from '@/components/formComponent.vue'
import BookList from '@/components/tableComponent.vue'

const books = ref([])          //skapar en reaktiv variabel för attt lagra böckerna från API

const getBooks = async () =>{
    const resp = await fetch('https://laboration2-2fullstackutveckling.onrender.com/books')
    const data = await resp.json()
    books.value = data       //uppdaterar den reaktiva variabeln så att gränssnittet ritas om
}

const addBook = async (bookData) => { //tar emot bookData från formulär via emit
    try{
        const resp = await fetch('https://laboration2-2fullstackutveckling.onrender.com/books', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bookData)    //skickar POST anrop med bokens data i jsonformat
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

const deleteBook = async(id) => { //tar emot id från tabell för att veta vilken bok som ska bort
    try{
        const resp = await fetch(`https://laboration2-2fullstackutveckling.onrender.com/books/${id}`, {
        method:'DELETE'      //skickar delete anrop till API
        })

        console.log("Statuskod:", resp.status)

        if (!resp.ok) {
            console.log("Kunde inte radera boken")
        } else {
            console.log("Boken raderad")     //om raderingen gick bra hämtar listan på nytt för att uppdatera view
            getBooks()
        }
    } catch (error) {
        console.error("Nätverksfel:", error)
    }
}

onMounted(() => {                  //ser till att hämta datan från API så fort sidan laddas in
    getBooks()
})
</script>

<template>
    <div class="container mt-4">
        <h1>Boklista</h1>
        <BookList :books="books" @delete-book="deleteBook"/>         <!-- importerar in tabellen och skickar ner den reaktiva arrayen books som en prop lyssnar även in på en emit för när en bok ska raderas-->

         <BookForm @add-book="addBook"/>                       <!-- importerar in förmuläret lyssnar på en emit när en bok läggs till-->
    </div>
</template>

<style scoped>
</style>