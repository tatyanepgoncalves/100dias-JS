// Desafio 5 -  Detetive dos Números com filter() 🕵️‍♂️
// Você tem um array de idades: [12, 17, 18, 25, 14].
// Use filter() pra retornar só quem tem 18 ou mais.

let idadePessoas = [12, 17, 18, 25, 14]
let filterIdade = idadePessoas.filter(idade => idade >= 18)
console.log(filterIdade)