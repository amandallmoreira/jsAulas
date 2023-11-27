//CONSTRUCTOR

//CRUD manual
//CREATE
class Produto{
    constructor(valorId, valorNome, valorMarca, valorPreco, valorQtdEstoque, valorQtdVendida){
        this.id = valorId;
        this.nome = valorNome;
        this.marca= valorMarca;
        this.preco= valorPreco;
        this.qtdEstoque= valorQtdEstoque;
        this.qtdVendida= valorQtdVendida;
    }
    venda(quantidade){
        this.qtdEstoque = this.qtdEstoque - quantidade;
        this.qtdVendida = this.qtdVendida - quantidade;
        return "Foram vendidos "+quantidade+" do produto"+this.nome;
    }

}

//UPDATE
var produto1 = new Produto(1,"Chocolate","Nestle",10,200,0);
var produto2 = new Produto(2,"Refrigerante","Guaraná",7,1000,500);