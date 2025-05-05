<script setup>
import { ref } from 'vue'

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
        capa: 'https://m.media-amazon.com/images/I/81D+5aMHzFL._SY425_.jpg',
    },
    {
        id: 3,
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'J. K. Rowling',
        preco: 40.7,
        capa: 'https://m.media-amazon.com/images/I/81QnqHwRiUL._SY425_.jpg',
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
        capa: 'https://m.media-amazon.com/images/I/51jZ+cwx44L._SY445_SX342_.jpg',
    },
]

const statusCart = ref(false)
</script>

<template>
    <header>
        <nav>
            <div class="logo">
                <button @click="statusCart = false">IFbooks</button>
                <hr>
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
                <div class="icons">
                    <ul>
                        <li><a @click="statusCart = true"><span
                                    class="material-symbols-outlined">shopping_cart</span></a></li>
                        <li class="linha"><a href="#"><span class="material-symbols-outlined">favorite</span></a></li>
                        <li><a href="#"><span class="material-symbols-outlined">person</span></a></li>
                    </ul>
                </div>

            </div>
        </nav>
    </header>

    <main>
        <div id="carrinho" v-if="statusCart">
            <section class="carrinho">
                <h1>Carrinho</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Quantidade</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>rrrrr</td>
                            <td>rrrrr</td>
                            <td>rrrrr</td>
                        </tr>
                        <tr>
                            <td>rrrrr</td>
                            <td>rrrrr</td>
                            <td>rrrrr</td>

                        </tr>
                        <tr>
                            <td>rrrrr</td>
                            <td>rrrrr</td>
                            <td>rrrrr</td>

                        </tr>

                    </tbody>

                </table>

                <button @click="statusCart = false">Voltar para a loja</button>

                <div>
                    <div class="cupom">
                        <input type="text" placeholder="Código do cupom" />
                        <button class="desconto">Inserir Cupom</button>
                    </div>
                    <div class="compraFinal">
                        <h3>Total da Compra</h3>

                        <ul>
                            <li>
                                <p>Produtos</p>
                                <p>R$</p>
                            </li>
                            <li>
                                <p>Frete</p>
                                <p>Grátis</p>
                            </li>

                            <li>
                                <p>Total</p>
                                <p>R$</p>
                            </li>
                        </ul>

                        <button class="pagamento">Ir para o pagamento</button>
                    </div>
                </div>

            </section>
        </div>

        <div id="home" v-else>
            <section class="banner">
                <div>
                    <p class="autor">Autor de Abril</p>
                    <h1>Eric-Emanuel Schmitt </h1>
                    <p>Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001
                        he received the title of Chevalier des Arts et des Lettres. His books have been translated into
                        over 40 languages.</p>
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
                    <li class="barra">
                        <span class="material-symbols-outlined">star</span>
                        <p>Livros recomendados</p>
                    </li>
                    <li>
                        <span class="material-symbols-outlined">menu_book</span>
                        <p><u>Mais vendidos</u></p>
                    </li>
                </ul>
                <hr>
            </section>

            <section class="lancamentos">

                <h2>Lançamentos</h2>

                <div>
                    <ul v-for="livro in livros" :key="livro.id">
                        <li>
                            <img :src="livro.capa" alt="imagem livros">
                        </li>
                        <li class="titulo">{{ livro.titulo }}</li>
                        <li class="autor">{{ livro.autor }}</li>
                        <li class="preco">R${{ livro.preco }}</li>
                        <li><a class="comprar" @click="statusCart = true"><span
                                    class="material-symbols-outlined">shopping_cart</span>Comprar</a></li>
                    </ul>
                </div>
            </section>
        </div>
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
        <hr />
        <p>© Alguns direitos reservados. IFbooks 2025.</p>
    </footer>
</template>

<style scoped>

header nav {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #27AE60;
    font-family: "Inter", sans-serif;
}

header nav div.logo {
    display: flex;
    padding: 1vw;
}

header nav div.logo button {
    border: none;
    background-color: #ffff;
    padding: 0.2vw 0.5vw 0 0.5vw;
    font-size: 1rem;
    color: #231F2D;

}

header nav div.logo hr {
    border: none;
    height: 30px;
    width: 1px;
    background-color: #27AE60;
    padding: 1vw 0;
}

header nav div.logo p {
    padding: 0 0.5vw;
    text-align: center;
    color: #27AE60;
}

header nav div.pesquisa input {
    border: none;
    background-color: #F1F1F1;
    padding: 0.8vw;
}

header nav div.pesquisa button {
    border: none;
    padding: 0.8vw;

}

header nav div.menu ul {
    display: flex;
    align-items: center;
    padding: 1vw;
}

header nav div.menu ul li a {
    text-decoration: none;
    align-items: center;
    padding: 0 2vw;
    color: #7B7881;
}

header nav div.menu {
    display: flex;
}

header nav div.icons ul {
    display: flex;
}

header nav div.icons ul li a {
    color: #27AE60;
    padding: 1vw 1vw;
    margin: 1vw 0;
}

header nav div.icons ul li.linha a {
    border-left: 1px solid #27AE60;
    border-right: 1px solid #27AE60;
    padding: 0.5vw;
}

header nav div.icons ul hr {
    border: none;
    height: 5px;
    width: 1px;
    background-color: #27AE60;
    margin: 1vw 0;
    padding: 1vw 0;
}


/*Main CSS*/

section.banner {
    display: flex;
    font-family: "Inter", sans-serif;
}

section.banner div p.autor {
    border: 1px solid #27AE60;
    padding: 1vw;
    text-align: center;
    width: 12vw;
    margin: 14vw 0 2vw 10vw;
    border-radius: 0.5vw;
    color: #27AE60;
}


section.banner div h1 {
    margin: 2vw 0 2vw 10vw;
    font-size: 3.2rem;
    font-weight: 600;
    color: #382C2C;
}

section.banner div p {
    margin: 2vw 0 5vw 10vw;
    color: #4D4C4C;
    line-height: 2.3vw;
    padding: 0 18vw 0 0;
    text-align: justify;
}

section.banner div a {
    margin: 5vw 5vw 10vw 10vw;
    text-decoration: none;
    background-color: #27AE60;
    padding: 0.8vw;
    border-radius: 0.3vw;
    color: #ffff;
}

section.banner div img {
    padding: 8vw 10vw 0 0;
    height: 52vw;
}

section.info {
    margin: 2vw 0;
    font-family: "Inter", sans-serif;

}

section.info hr {
    border: none;
    height: 0.5px;
    background-color: #27AE60;
    margin: 1vw 0;
    padding: 0.02vw 0;
}


section.info ul {
    justify-content: center;
    padding: 0 6vw 0 0;
    display: flex;
    margin: 0 3vw 0 8vw;
}

section.info ul li {
    display: flex;
    padding: 2vw;
}

section.info ul li.barra {
    border-left: 1px solid #27AE60;
    border-right: 1px solid #27AE60;
}

section.info ul hr {
    border: none;
    height: 10px;
    width: 1px;
    background-color: #27AE60;
    margin: 1vw 0;
    padding: 2vw 0;
}

section.info ul li p {
    padding: 1vw 2vw;
}

section.info ul li span {
    padding: 0.5vw 0;
    font-size: 2.5vw;
}

section.lancamentos {
    font-family: "Inter", sans-serif;

}

section.lancamentos h2 {
    font-size: 2rem;
    margin: 0.5vw 8vw 0 10vw;
    font-weight: 600;
    color: #382C2C;
}

section.lancamentos div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 3vw 10vw;
    margin: 2vw 0 1vw 0;
}

section.lancamentos div ul li {
    text-align: center;
}


section.lancamentos div ul li img {
    width: 18vw;
    height: 28vw;
    object-fit: cover;
    margin: 2vw 0 0 0;
}

section.lancamentos div ul li.titulo {
    font-size: 0.86rem;
    text-align: left;
    margin: 2vw 0 0 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
}

section.lancamentos div ul li.autor {
    font-size: 0.76rem;
    text-align: left;
    color: #4F4C57;
    margin: 1vw 0;
}

section.lancamentos div ul li.preco {
    margin: 1.5vw 0;
    text-align: left;
}

section.lancamentos div ul li a {
    text-decoration: none;
    background-color: #27AE60;
    border-radius: 0.3vw;
    color: #ffff;
    padding: 0.5vw 6vw;
    margin: 3vw 0 5vw 0;
}


section.lancamentos a.comprar {
    display: flex;
    gap: 1.5px;
    align-items: center;
}

section.lancamentos div ul li span {
    margin: 0 0 0 0;
}


/*CARRINHO CSS*/

section.carrinho {
    font-family: "Inter", sans-serif;
}

section.carrinho h1 {
    color: #27AE60;
    font-size: 1.8rem;
    font-weight: 600;
    padding: 8vw 0 2vw 14vw;
}

section.carrinho table {
    margin: auto;
}

section.carrinho table thead th {
    font-size: 1.2rem;
    color: #382C2C;
    padding: 1vw 10vw;
    border-bottom: 2px solid #27AE60;

}

section.carrinho table tbody td {
    text-align: center;
    padding: 3vw 0 3vw 0;
    border-bottom: 2px solid #d8d8d8;
}

section.carrinho button {
    margin: 5vw 14vw;
    padding: 1vw 2vw;
    background-color: #ffff;
    border: 1px solid #302b3b;
    border-radius: 0.3vw;
    font-weight: 550;
}

section.carrinho>div {
    display: flex;
    justify-content: space-between;
    margin: 5vw 11vw 0 11vw;
}

section.carrinho div.cupom input {
    padding: 0 0 0 2vw;
    width: 18vw;
    height: 4vw;
    border: 1.5px solid #2e283a;
    font-weight: 600;
    border-radius: 0.3vw;
}

section.carrinho div button.desconto {
    padding: 1vw 2vw;
    background-color: #27AE60;
    border: none;
    border-radius: 0.3vw;
    font-weight: 550;
    width: 18vw;
    height: 4vw;
    color: #ffff;
}

section.carrinho div div.compraFinal {
    border: 1.5px solid #2e283a;
    padding: 2vw;
    width: 20%;
}

section.carrinho div div.compraFinal h3 {
    font-weight: 600;
}

section.carrinho div div.compraFinal ul li {
    display: flex;
    justify-content: space-between;
    padding: 2vw;
    border-bottom: 2px solid #d8d8d8;
}

section.carrinho div div.compraFinal button.pagamento {
    margin: 2vw;
    text-align: center;
    background-color: #27AE60;
    border: none;
    border-radius: 0.3vw;
    font-weight: 550;
    color: #ffff;
}

/*Footer CSS*/

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
    padding: 1.2vw 0;
}

</style>
