var produto1="Tenis";
var produto2="Chocolate";
var produto3="Videogame";
console.log(produto1)

var listaDeProdutos=["Tenis","Chocolate","Videogame"];
console.log(listaDeProdutos);
//indice
console.log(listaDeProdutos[2]);

//metodo alternativo
// var mercadoria=Array();
// mercadoria[0]="Colar";
// mercadoria[1]="Tenis";
// mercadoria[2]="Bola";

// COMANDOS ARRAY
// PUSH - ADICIONAR UM ELEMENTO NO FINAL DO ARRAY
listaDeProdutos.push("Bola");
console.log(listaDeProdutos);

// UNSHIFT - adiciona um elemento no começo do array
listaDeProdutos.unshift("Bicicleta");
console.log(listaDeProdutos);

// POP - remover um elemento no final do array
listaDeProdutos.pop();
console.log(listaDeProdutos);

//SHIFT - Remover um elemento no começo do array
listaDeProdutos.shift();
console.log(listaDeProdutos);

// SPLICE - Indice desejado, quantos indices irá afetar e o que será adicionado
listaDeProdutos.splice(1,2,"Celular");
console.log(listaDeProdutos);

// INCLUDES - Busca, input de pesquisa, pesquisa se o elemento existe. 
console.log(listaDeProdutos.includes("Celular"))

// SLICE - Tira um elemento do array e transforma em outro array
  
//LENGTH - Conta quantos elementos tem no array
console.log("Existem "+listaDeProdutos.length+" produtos.")

// Não usar o REMOVE ele dá ERRO