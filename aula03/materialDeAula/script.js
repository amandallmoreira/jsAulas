// REPETÇÃO
// ENQUANTO (verifica e faz)
// enquanto (condicao) faça
// processo
// contador <- contador +1
// fimEnquanto

// var numero=1;
// while(numero<=10){
//     console.log(numero+"Bacana demais.");
//     numero=numero + 1; //contador

// }

        // VAI RODAR O WHILE ENQUANTO A CONDIÇÃO FOR TRUE


// FACA ATE

var contador=1
do{
    console.log(contador);
    contador++; //contador = contador + 1, controlador de acréscimo
}while(contador <=10);
        // INDEPENDENTE DA SITUAÇÃO JÁ GARANTE QUE RODA O CODIGO UMA VEZ


// PARA
for(var cont=1; cont<=20; cont++){
    console.log("Esse código rodou "+cont+" vezes.");
}
        // AGILIZA A CONDIÇÃO

// FACA PARA CADA
        // forEach puxa um ARRAY, roda de acordo com o numero de elementos do ARRAY



var listaDeElementos=["elemento1", "elemento2","elemento3"];
listaDeElementos.forEach((cadaElemento)=>{
    console.log(cadaElemento);
});