var btnTema = $('#btnTema');
var body = $('body');

btnTema.on("click",function(){
    if(btnTema.hasClass("temaClaro")){
        // btnTema.classList.replace("temaClaro","temaEscuro");
        btnTema.removeClass("temaClaro");
        btnTema.addClass("temaEscuro");
        btnTema.text("Trocar Tema: Atual Escuro");

        body.removeClass("temaClaro");
        body.addClass("temaEscuro");

    }else{
        btnTema.removeClass("temaEscuro");
        btnTema.addClass("temaClaro");
        btnTema.text("Trocar Tema: Atual Claro");

        body.removeClass("temaEscuro");
        body.addClass("temaClaro");
    }
});

