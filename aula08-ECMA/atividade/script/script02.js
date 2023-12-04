var verificarPromise = new Promise ((resolve, reject) => {
    let nome="ADM";
    let senha="ADM";

    if (nome == "ADM" && senha == "ADM"){
        resolve("Seja bem vindo Administrador!");
    }else{
        reject("O usuário não é o adm! Faça o login de maneira alternativa!");
    }

});

verificarPromise.then((x)=>{
    console.log(x);
    //alert("Login com sucesso!");
});

verificarPromise.catch((x) => {
    console.log(x); 
    //alert("Login falhou!");
});