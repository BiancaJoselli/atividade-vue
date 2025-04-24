<script setup>
import { computed, reactive } from 'vue';

const livros = [
    {
        id: 1,
        titulo: 'Harry Potter e a Pedra Filosofal',
        autor: 'J. K. Rowling',
        preco: 50.99,
        capa: 'https://m.media-amazon.com/images/I/81ibfYk4qmL._SY385_.jpg',
    },
    {
        id: 2,
        titulo: 'Harry Potter e a Câmara Secreta',
        autor: 'J. K. Rowling',
        preco: 45.90,
        capa: 'https://m.media-amazon.com/images/I/81D+5aMHzFL._SY425_.jpg',
    },
    {
        id: 3,
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'J. K. Rowling',
        preco: 40.70,
        capa: 'https://m.media-amazon.com/images/I/81QnqHwRiUL._SY425_.jpg',
    },
    {
        id: 4,
        titulo: 'Harry Potter e o Cálice de Fogo',
        autor: 'J. K. Rowling',
        preco: 60.89,
        capa: 'https://m.media-amazon.com/images/I/51Z9TzC6BmL._SY445_SX342_.jpg',
    },
    {
        id: 5,
        titulo: 'Harry Potter e a Ordem da Fênix',
        autor: 'J. K. Rowling',
        preco: 70.29,
        capa: 'https://m.media-amazon.com/images/I/51DSlL4+hrL._SY445_SX342_.jpg',
    },
    {
        id: 6,
        titulo: 'Harry Potter e o Enigma do Príncipe',
        autor: 'J. K. Rowling ',
        preco: 65.55,
        capa: 'https://m.media-amazon.com/images/I/51A-jMP5AML._SY445_SX342_.jpg',
    },
    {
        id: 7,
        titulo: 'Harry Potter e as Relíquias da Morte',
        autor: 'J. K. Rowling',
        preco: 80.30,
        capa: 'https://m.media-amazon.com/images/I/51nqfHDw2aL._SY445_SX342_.jpg',
    },
    {
        id: 8,
        titulo: 'Harry Potter e a Criança Amaldiçoada',
        autor: 'J. K. Rowling',
        preco: 58.87,
        capa: 'https://m.media-amazon.com/images/I/91m1WPwTusL._SY425_.jpg',
    }
];

</script>

<template>
<header>
    <nav>
    <div class="logo">
        <a href="#">IFbooks</a>
        <hr/>
        <p>Apreço a <br>leitura</p>
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
        <a href="#">Comprar</a>
    </ul>
    </section>

</main>
</template>

<style scoped>

header nav {
    display: flex;
}

header nav div.logo{
    display: flex;
    padding: 1vw;
}

header nav div.logo a {
    padding: 0.5vw 0.5vw 0 0.5vw;
    text-decoration: none;
    color: #231F2D;

}

header nav div.logo p {
    padding: 0 0.5vw;
    text-align: center;
}


header nav div.menu ul {
    display: flex;
}

</style>
