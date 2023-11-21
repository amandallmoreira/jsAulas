// imprimir , ; é opcional
console.log("Hello world!");

// CAIXAS DE TEXTO
alert("Olá, este é meu primeiro comando JS.");
confirm("Olá, estou aprendendo JS."); //Espera resposta, V ou F; 
// JS é lido de cima para baixo;
prompt("Qual é o seu nome?"); //é um INPUT, não salva var

// VARIAVEIS
// LET escopo local, sobrescrevivel. É uma var temporária, quando acaba ela 
//é deletada da memória, só existe dentro de FUNCTION, BLOCO, PROCEDIMENTO


function testeLet(){
    let numero=0;
    numero=10;
    console.log(numero)
}

// CONST escopo global, não sobrescrevivel
const pi = 3.14;
console.log(pi);

// VAR escopo gloval, sovrescrevivel
var nome="Victor";
console.log(nome);

var idade = prompt("Qual é a sua idade?");

// PRIMEIRA MANEIRA +
// alert("Seja bem vindo"+nome+"Que sua estadia seja excelente");

// SEGUNDA MANEIRA ${} - IGNORA O TRECHO COM STRING
alert(`Seja bem vindo(a)! ${nome}`);

//TIPOS DE VALORES
// number numeros
var real=180;

// boolean logicos ou V ou F
var ligado = true;

// objeto
var carro=[];
