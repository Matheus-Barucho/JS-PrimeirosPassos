import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;

    _saldo = 0;
    //#saldo = 0; proposta = https://github.com/tc39/proposal-class-fields#private-fields


    set cliente(novoValor){
      if(novoValor instanceof Cliente){
      this._cliente = novoValor;
      }
    } 

    get cliente(){
      return this._cliente;
    }

    get saldo(){
      return this._saldo
    }

    constructor(agencia, cliente){
      this.agencia = agencia;
      this.cliente = cliente
      ContaCorrente.numeroDeContas += 1;
    }
  
    sacar(valor) {
      if (this._saldo >= valor) {
        this._saldo -= valor;
        return valor; //retorna o valor para o sistema continuar 
      }
    }
  
    depositar(valor) {
      if (valor <= 0) { //early return, poderia ser também  "if (valor <= 0) return;"
        return;
      }
      this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
  }