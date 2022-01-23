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
