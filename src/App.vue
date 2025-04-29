<script setup>
import { computed, reactive, ref } from 'vue'

const livros = [
    {
        id: 1,
        titulo: 'Harry Potter e a Pedra Filosofal',
        autor: 'J. K. Rowling',
        preco: 50.99,
        capa: 'https://m.media-amazon.com/images/I/61jgm6ooXzL._SY425_.jpg',
    },
    {
        id: 2,
        titulo: 'Harry Potter e a Câmara Secreta',
        autor: 'J. K. Rowling',
        preco: 45.9,
        capa: '',
    },
    {
        id: 3,
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'J. K. Rowling',
        preco: 40.7,
        capa: '',
    },
    {
        id: 4,
        titulo: 'Harry Potter e o Cálice de Fogo',
        autor: 'J. K. Rowling',
        preco: 60.89,
        capa: 'https://m.media-amazon.com/images/I/51SC7epwnLL._SY425_.jpg',
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
        preco: 80.3,
        capa: 'https://m.media-amazon.com/images/I/81PbdwXqKkL._SY425_.jpg',
    },
    {
        id: 8,
        titulo: 'Animais Fantásticos e Onde Habitam',
        autor: 'J. K. Rowling',
        preco: 58.87,
        capa: '',
    },
]
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
                        <li>
                            <a href="#"><span class="material-symbols-outlined">search</span></a>
                        </li>
                        <li>
                            <a href="#"><span class="material-symbols-outlined">favorite</span></a>
                        </li>
                        <li>
                            <a href="#"><span class="material-symbols-outlined">person</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <hr />
    </header>

    <main>
        <section class="banner">
            <div>
                <p>Autor de Abril</p>
                <h1>Eric-Emanuel Schmitt</h1>
                <p>
                    Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and
                    in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been
                    translated into over 40 languages.
                </p>
                <a href="#">Acessar página do livro</a>
            </div>
            <div>
                <img src="../public/book.png" alt="imagem livro noc ognia" />
            </div>
        </section>

        <section class="info">
            <hr />
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
            <hr />

            <ul v-for="livro in livros" :key="livro.id">
                    <li>
                    <img :src="livro.capa" alt="imagem livros" />
                </li>
                <li>{{ livro.titulo }}</li>
                <li>{{ livro.autor }}</li>
                <li>R${{ livro.preco }}</li>
                <button>Comprar</button>
            </ul>
        </section>
    </main>

    <footer>

        <div class="gerais">
            <div class="redes-sociais">
                <h3>IFbooks</h3>

                <ul>
                    <li>
                        <a href="#"><span class="fa-brands fa-square-facebook"></span></a>
                    </li>
                    <li>
                        <a href="#"><span class="fa-brands fa-square-instagram"></span></a>
                    </li>
                    <li>
                        <a href="#"><span class="fa-brands fa-square-twitter"></span></a>
                    </li>
                </ul>
            </div>

            <div class="contato-pagamento">

                <h3>Contato</h3>
                <ul>
                    <li><span class="material-symbols-outlined"> call</span> +55 47 4004-5263</li>
                    <li><span class="fa-solid fa-clock"></span> 8h às 23h - Seg a Sex</li>
                    <li><span class="fa-solid fa-envelope"></span> contato@ifbooks.com</li>
                </ul>

                <img src="/logo/paipal.png" alt="Paipal" />
                <img src="/logo/MasterCard.png" alt="Mastercard" />
                <img src="/logo/VISA.png" alt="Visa" />

            </div>
        </div>
        <hr>
        <p>© Alguns direitos reservados. IFbooks 2025.</p>
    </footer>
</template>

<style scoped>
footer {
    background-color: #27ae60;
    color: #ffffff;
    font-family:
        'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

a {
    color: #ffffff;
}

.gerais {
    display: flex;
    justify-content: space-between;

}

.redes-sociais {
    padding: 2vw 0 8vw 10vw;
}

.redes-sociais h3 {
    padding: 4px;
}

.redes-sociais ul {
    display: flex;
    font-size: 35px;
    padding: 2px 0;
    margin: 8px 0;
}

.redes-sociais ul li {
    margin: 10px 6px;

}

.contato-pagamento {
    margin: 2vw 10vw 5vw 0;
}

.contato-pagamento h3 {
    font-size: 18px;
    font-weight: 600;

}

.contato-pagamento ul {
    color: #ffffffa6;
    margin: 2vw 0 3vw 0;

}

.contato-pagamento ul li {
    margin-top: 20px;
}

.contato-pagamento img {
    padding-right: 10px;
}

p {
    text-align: center;
    padding: 1.2vw 0 ;
}
</style>
