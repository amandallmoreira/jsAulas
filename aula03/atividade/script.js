var mulan = ["Titulo: Mulan","Descricao: lorem"];
var filmes = [mulan,"Frozen","Frozen 2","Barbie","Shrek","Star Wars","Senhor dos anéis","Harry Potter"];

// for(var contador = 0; contador < filmes.length; contador++){
//     console.log(filmes[contador]);
// }

filmes.forEach( (cadaFilme) => {
    console.log(cadaFilme);
});

// Só dá pra visualizar no console