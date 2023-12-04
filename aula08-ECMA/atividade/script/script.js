var jogos = ["Elden Ring", "Red Dead 2", "CupHead", "MarioKart 8", "Kirby"];

const btnProcurar = document.querySelector("#btnProcurar");

btnProcurar.addEventListener("click", buscarJogos);

function buscarJogos(){
    let procurar = document.querySelector("#procurar").value;
    let resposta = document.querySelector("#resposta");

    var resultado = jogos.includes(procurar);
    if(resultado == true){
        resposta.innerHTML = `O jogo ${procurar} foi encontrado!`
    } else{
        resposta.innerHTML = `O jogo citado não foi encontrado!`
    }

}