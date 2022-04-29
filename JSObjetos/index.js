import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 12345678912);

const cliente2 = new Cliente( "Alice", 12367678912);

let numeroDeContas = 0;

const ContaCorrenteRicardo = new ContaCorrente(1001, cliente1);
ContaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);


let valor = 200;
ContaCorrenteRicardo.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);



//const conta2 = new ContaCorrente();
//conta2.cliente = new Cliente();
//conta2.cliente.nome = "Alice"
//conta2.cliente.cpf = 12367678912
//conta2.agencia = 102
