// Desafio 6 - Banco de moedas com reduce() 🪙
// Você tem um array de moedas de ouro: [5, 10, 15].
// Use reduce() pra calcular o total acumulado.

let moedas = [5, 10, 15]
let total = moedas.reduce((acumulador, moeda) => acumulador + moeda, 0)
console.log(`O valor total das moedas é R$ ${total.toFixed(2)}`)