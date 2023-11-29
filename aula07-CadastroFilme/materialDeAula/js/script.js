var texto = "Olá mundo!";
console.log(texto);
//REPLACE / REPLACE ALL
//Replace muda um  termo
console.log(texto.replace("mundo", "Terra"));
//Replace All muda todos os termos
console.log(texto.replaceAll("mundo", "Terra"));

//Class List
var exemplo = document.querySelector("#exemplo");
exemplo.classList.remove("claro");
exemplo.classList.add("escuro");

function mudaTema(){
    //contains - verifica se elemento contem uma classe
    if(exemplo.classList.contains("escuro")){
        //replace - substitui uma classe por outras
        exemplo.classList.replace("escuro","claro");
    }else{
        exemplo.classList.replace("claro","escuro");
    }
}

function mudaClasse(){
    //toggle troca a classe de um elemento quando engatilhado
    exemplo.classList.toggle("escuro");
}

//Concatenação, muito usado para esconder informações
var primeiroNome="Amanda";
var sobreNome="Moreira";
var cartao="5588";

// Concatenação no COMEÇO
var nomeCompleto = sobreNome.padStart(13,primeiroNome);
    //pega a var e coloca algo no começo da var
console.log(nomeCompleto);
var nomeCompleto1 = sobreNome.padEnd(13,primeiroNome);
    //pega a var e coloca algo no final da var
console.log(cartaoEscondido);
var cartaoEscondido=cartao.padStart(16,"*");
console.log(cartaoEscondido);