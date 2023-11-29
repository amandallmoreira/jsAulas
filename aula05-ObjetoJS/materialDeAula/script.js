// var cliente1Nome="Leonardo";
// var cliente1Cpf=9999999999;
// var cliente1Endereco="Rua 3 bloco A casa 2";
// var cliente1Tel="6199999-9999";
// var cliente1Conta="0001";
// var cliente1Saldo=0;
//MUITO COMPLICADO, NÃO É O IDEAL

//ORIENTADO AO OBJETO
//Começar a classe com letra maiuscula de preferencia
class Cliente{
    nome;
    cpf;
    endereço;
    telefone;
    conta;
    saldo;
    //AÇÃO = FUNÇÃO

    verificaSaldo(){
        return "O saldo da conta é de R$ "+this.saldo;
    }

    sacar(valor){
        //this.atributo = seleciona um atributo do modelo
        if(this.saldo>=valor){
            this.saldo=this.saldo-valor;
            return "Você sacou: R$ "+ valor +" "+ this.verificaSaldo();
        }else{
            return "Operação não autorizada! Você está quebrado."
        }
    }

    depositar(valor){
        if(valor<=0){
            return "Operação Inválida. Mínimo autorizado R$0,01";

        }else{
            this.saldo = this.saldo + valor;
            return "Operação concluída com sucesso. Depósito de R$ " +valor;

        }
    }
}


var cliente1=new Cliente();
var cliente2=new Cliente();
cliente1.nome="Leonardo";
cliente1.cpf=9999999999;
cliente1.endereco="Rua 3 bloco A casa 2";
cliente1.telefone="6199999-9999";
cliente1.conta="0001";
cliente1.saldo=0;
console.log(cliente1);


//OBJETO tem atributos, funções, faz operação, processos, recebe um conjunto de valores
//VAR NORMAL não faz processo, não faz função, ..., não retorna valor. 