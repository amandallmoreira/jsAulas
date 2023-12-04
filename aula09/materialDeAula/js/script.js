//INSTALAÇÃO
//VISITE O SITE: https://jquery.com/download/
// CLIQUE NA OPÇÃO "Download the uncompressed, development jQuery 3.7.1"
// ABERTO O ARQUIVO, APERTE O BOTÃO DIREITO E SALVAR PAGINA COMO...
// SALVE EM UM LOCAL DE SUA PREFERENCIA.

// SELETOR JQUERY
// variavel = $(# ou . elemento);


var titulo = $("#tituloSite").text("Aula 9 - Jquery");
//já troca e adiciona outro termo;
// text(), se vazio, lista o texto, se com valor sobreescreve o conteúdo

// Sem Jquery
// var paragrafo = document.querySelector("#paragrafo");
// paragrafo.addEventListener("mouseover", souParagrafo);
// function souParagrafo(){
//     console.log("Sou um paragrafo");
// }

$("#paragrafo").on("mouseover", function(){
    // console.log("Sou um paragrafo");
    // let btn=$("#btn")
    alert("Sou um paragrafo");
});

//COMPORTAMENTO JQUERY
var nome="Amanda";
var erro= undefined; //Não aparece nada, mostra o conteudo que já estava lá no HTML

$("#nomeUsuario").text(nome);

// Algoritmo Exemplo : Contagem de caracteres
$("#blocoDeTexto").on("input",function(){
    // input, engatilha toda info inserida;
    let blocoContagem = $("#blocoDeTexto").val();
    let numCaracteres = $("#numCaracteres");

    let contagem = blocoContagem.length;
    numCaracteres.text(contagem);
});

