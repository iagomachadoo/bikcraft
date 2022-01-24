//Ativar links do menu (mostrando qual página está ativada) 
const links = document.querySelectorAll('.lista-menu a');

function ativarLink(link) {
    const url = location.href//pegando o url da página via window

    const href = link.href//pegando o url do elemento a

    if (url.includes(href)) {
        link.classList.add('ativo')//adicionando classe de vai ativar o decorador que informa a página ativa no momento
        
    }//comparado se o url da página atual é igual igual ao do link clicado. Nesse caso a compração pelo operador === não funcionará porque existem páginas que contém parte do url igual mas mais partes adicionais. Portanto, a forma de fazer essa comparação é com o método .includes() que verifica se o parâmetro passado existe dentro da string a se comparar.
}

//função para ativar cada um dos links
links.forEach(ativarLink)

//Itens do orçamento
const parametrosUrl = new URLSearchParams(location.search)//classe que vai extrar os parâmetros da url

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);//pegando os elementos pelo id

    if (elemento) {
        elemento.checked = true//selecionando o elemento que estiver no estado checked
    }
    
}//função para mostrar os parâmetros da url

parametrosUrl.forEach(ativarProduto)

//perguntas frequentes
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(evento) {
    const pergunta = evento.currentTarget//pegando o elemento que foi clicado

    const controls = pergunta.getAttribute('aria-controls')//pegando o atributo aria-contols

    const resposta = document.getElementById(controls);//pegando a resposta da pergunta

    resposta.classList.toggle('ativa')//adicionando a classe ativa a resposta
    
    const ativa = resposta.classList.contains('ativa')//verificando se o elemento contém a classe
    
    pergunta.setAttribute('aria-expanded', ativa)
}

function eventosPergunta(pergunta) {
    pergunta.addEventListener('click', ativarPergunta) 
}//adicionando um evento as perguntas

perguntas.forEach(eventosPergunta)

//Galeria de bicicletas
const galeria = document.querySelectorAll('.bicicleta-img img');

const containerGaleria = document.querySelector('.bicicleta-img');

function trocarImagem(evento) {
    const imgAtual = evento.currentTarget

    const tamanhoDaTela = matchMedia('(min-width: 1000px)').matches//definindo um tamanho mínimo de tela

    if (tamanhoDaTela) {
        containerGaleria.prepend(imgAtual)//o método .prepend insere um novo elemento antes do primeiro filho do elemento pai. Nesse caso, a imagem clicada será adicionada como o primeiro filho da div bicicleta-img

    }//se a tela estiver acima do tamanho mínimo a troca de imagens deve acontecer
}   

function eventoGaleria(img) {
    img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventoGaleria)

//Animação (plugin)
if (window.SimpleAnime) {
    new SimpleAnime();
}