console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo= `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); //Adicionando um item na lista.
console.log("Destinos Possíveis");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //Retira um item da lista
console.log("--------------------------");
console.log(listaDeDestinos);
console.log("--------------------------");
console.log(listaDeDestinos[1], listaDeDestinos[0]);
