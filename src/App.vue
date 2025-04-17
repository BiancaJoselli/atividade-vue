<script setup>
import { computed, reactive, watch } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'

const state = reactive({
    searchTerm: ''
})

const bookSearch = computed(() => state.searchTerm)

function searchBook() {
console.log('Buscando por:', bookSearch.value)
}
</script>

<template>
<header>
    <nav>
    <div class="logo">
        <a href="#">IFbooks</a>
        <hr />
        <p>Apreço a leitura</p>
    </div>

    <div class="pesquisa">
        <input type="text" v-model="state.searchTerm" placeholder="Buscar livro..." />
        <button @click="searchBook">🔍</button>
    </div>
    <div class="menu">
        <ul>
            <li><a href="#">Termos</a></li>
            <li><a href="#">Equipe</a></li>
            <li><a href="#">Envio</a></li>
            <li><a href="#">Devoluções</a></li>
        </ul>
        <div>
            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
        </div>

    </div>
    </nav>
</header>
</template>

<style scoped></style>
