// Desafio 9 - Quem gastou mais? 💸
// Você tem um array de objetos com pessoas e seus gastos: 

// Use reduce() pra retornar o nome da pessoa que mais gastou.


const pessoas = [
  { nome: "Ana", gasto: 50 },
  { nome: "Bruno", gasto: 100 },
  { nome: "Carla", gasto: 80 },
];
let gastos = pessoas.reduce((maior, pessoa) => {
  return pessoa.gasto > maior.gasto ? pessoa : maior
})

console.log(`${gastos.nome} foi quem mais gastou: R$ ${gastos.gasto}`)