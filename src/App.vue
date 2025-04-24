<script setup>
import { computed, reactive } from 'vue';

const livros = [
    {
        id: 1,
        titulo: 'Harry Potter e a Pedra Filosofal',
        autor: 'J. K. Rowling',
        preco: 50.99,
        capa: '',
    },
    {
        id: 2,
        titulo: 'Harry Potter e a Câmara Secreta',
        autor: 'J. K. Rowling',
        preco: 45.90,
        capa: '',
    },
    {
        id: 3,
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'J. K. Rowling',
        preco: 40.70,
        capa: '',
    },
    {
        id: 4,
        titulo: 'Harry Potter e o Cálice de Fogo',
        autor: 'J. K. Rowling',
        preco: 60.89,
        capa: '',
    },
    {
        id: 5,
        titulo: 'Harry Potter e a Ordem da Fênix',
        autor: 'J. K. Rowling',
        preco: 70.29,
        capa: '',
    },
    {
        id: 6,
        titulo: 'Harry Potter e o Enigma do Príncipe',
        autor: 'J. K. Rowling ',
        preco: 65.55,
        capa: '',
    },
    {
        id: 7,
        titulo: 'Harry Potter e as Relíquias da Morte',
        autor: 'J. K. Rowling',
        preco: 80.30,
        capa: 'https://m.media-amazon.com/images/I/81PbdwXqKkL._SY425_.jpg',
    },
    {
        id: 8,
        titulo: 'Harry Potter e a Criança Amaldiçoada',
        autor: 'J. K. Rowling',
        preco: 58.87,
        capa: '',
    }
];

</script>

<template>
<header>
    <nav>
    <div class="logo">
        <a href="#">IFbooks</a>
        <hr/>
        <p>Apreço a leitura</p>
    </div>

    <div class="pesquisa">
        <input type="text" placeholder="Buscar livro..." />
        <button>🔍</button>
    </div>
    <div class="menu">
        <ul>
            <li><a href="#">Termos</a></li>
            <li><a href="#">Equipe</a></li>
            <li><a href="#">Envio</a></li>
            <li><a href="#">Devoluções</a></li>
        </ul>
        <div>
            <ul>
                <li><a href="#"><span class="material-symbols-outlined">search</span></a></li>
                <li><a href="#"><span class="material-symbols-outlined">favorite</span></a></li>
                <li><a href="#"><span class="material-symbols-outlined">person</span></a></li>
            </ul>
        </div>

    </div>
    </nav>
    <hr>
</header>

<main>
    <section class="banner">
    <div>
        <p>Autor de Abril</p>
        <h1>Eric-Emanuel Schmitt </h1>
        <p>Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.</p>
        <a href="#">Acessar página do livro</a>
    </div>
    <div>
        <img src="../public/book.png" alt="imagem livro noc ognia">
    </div>
    </section>

    <section class="info">
        <hr>
        <ul>
            <li>
                <span class="material-symbols-outlined">local_shipping</span>
                <p>Frete grátis para SC</p>
            </li>
            <li>
                <span class="material-symbols-outlined">star</span>
                <p>Livros recomendados</p>
            </li>
            <li>
                <span class="material-symbols-outlined">menu_book</span>
                <p>Mais vendidos</p>
            </li>
        </ul>
        <hr>

    <ul v-for="livro in livros" :key="livro.id">
        <li>
        <img :src=" livro.capa " alt="imagem livros"></li>
        <li>{{ livro.titulo }}</li>
        <li>{{ livro.autor }}</li>
        <li>R${{ livro.preco }}</li>
        <button>Comprar</button>
    </ul>
    </section>

</main>
</template>

<style scoped></style>
