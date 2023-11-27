//seleciona INPUT
var input = document.querySelector("#inputText");

//adicionar EVENTO de FOCO (FOCUS, FOCUSIN, FOCUSOUT), perder foco (BLUR)
input.addEventListener("focus",mudaCor);
input.addEventListener("blur",mudaCorVerifica);

function mudaCor(){
    let resposta = document.querySelector("#resposta");
    input.style.background="yellow";
    resposta.innerHTML="Digite uma senhar maior que 3 digitos";
}

//foco vai ficar com INPUT amarelo

//perder foco, se tiver menos que 3 caracteres fica VERMELHO. 
//Se maior que 3, fica VERDE.
function mudaCorVerifica(){
    let inputValor=input.value.length;
    if(inputValor<3){    
        let resposta = document.querySelector("#resposta");
        input.style.background="red";
        resposta.innerHTML="Digite uma senha válida.";
    }else{
        let resposta = document.querySelector("#resposta");
        input.style.background="green";
        resposta.innerHTML="Senha válida.";
    }
   
}


//LENGTH conta qualquer elemento