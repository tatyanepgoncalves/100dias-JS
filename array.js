// Desafio 1 - Empilhando Fatias 🍕 (push e pop)
// Crie um array com 3 sabores de pizza.
// Depois, adicione mais um com push() e remova o último com pop().
// Mostre o array final.

let pizza = ["calabreza", "portuguesa", "moda da casa"]

pizza.push("marguerita")
console.log(pizza)
pizza.pop()
console.log(pizza)

// Desafio 2 - Fila do pão 🥖 (shift e unshift)
// Crie uma fila com três nomes.
// Use shift() pra tirar o primeiro e unshift() pra colocar um novo no começo.
// Imprima a fila atualizada.

let fila = ["Maria", "Rodrigo", "Paulo"]

fila.shift()
console.log(fila)
fila.unshift("Raquel")
console.log(fila)

// Desafio 3 - Fatiando o bolo 🎂 (slice)
// Crie um array com 5 camadas de um bolo.
// Use slice() para pegar apenas as camadas do meio (índices 1 a 3).
// Mostre as camadas selecionadas e o array original.

let bolo = ["Chocolate", "Coco", "Leite Ninho", "Brigadeiro", "Abacaxi"]

let camadas = bolo.slice(1, 4)
console.log(camadas)

// Desafio 4 - Poção mágica com map() 🧪
// Você tem um array com números [1, 2, 3, 4, 5] representando níveis de poder.
// Use map() para dobrar o poder de cada item.
// Resultado esperado: [2, 4, 6, 8, 10].

let numeros = [1, 2, 3, 4, 5] 

let numero = numeros.map(b => b * 2)
console.log(numero)

// Desafio 5 -  Detetive dos Números com filter() 🕵️‍♂️
// Você tem um array de idades: [12, 17, 18, 25, 14].
// Use filter() pra retornar só quem tem 18 ou mais.

let idadePessoas = [12, 17, 18, 25, 14]
let filterIdade = idadePessoas.filter(idade => idade >= 18)
console.log(filterIdade)

// Desafio 6 - Banco de moedas com reduce() 🪙
// Você tem um array de moedas de ouro: [5, 10, 15].
// Use reduce() pra calcular o total acumulado.

let moedas = [5, 10, 15]
let total = moedas.reduce((acumulador, moeda) => acumulador + moeda, 0)
console.log(`O valor total das moedas é R$ ${total.toFixed(2)}`)

// Desafio 7 - Multiplicação mágica com map()
// Você tem um array de preços: [10, 20, 30].
// A loja vai aplicar um desconto de 50% em todos.
// Use map() pra retornar os novos valores.

let preco = [10, 20, 30]
let precoNovo = preco.map(b => b - (b * 0.5))

console.log(`Os preços com descontos são: ${precoNovo.join(" | R$ ")}`)

// Desafio 8 - Filtro e transformação juntos 🔥
// Dado o array [1, 2, 3, 4, 5, 6]:
// Primeiro use filter() para pegar somente os pares.
// Depois use map() para multiplicar os pares por 10.
// Resultado final esperado: [20, 40, 60].

let numbers = [1, 2, 3, 4, 5, 6]
let filterNumbers = numbers.filter(number => number % 2 === 0)
console.log(filterNumbers)

let mapNumbers = filterNumbers.map(number => number * 10)
console.log(`Os numeros pares multiplicados por 10 são: ${mapNumbers}` )

let resultado = numbers.filter(n => n % 2 === 0).map(n => n * 10)
console.log(`Os numeros pares multiplicados por 10 são: ${resultado}` )


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

// Desafio 10 - Mini sistema bancário 🏦
// Crie um array de transações com valores positivos (depósitos) e negativos (saques):
// Use filter() pra pegar só os saques (valores negativos).
// Use reduce() pra saber quanto foi sacado no total.
// Depois use reduce() pra saber o saldo final da conta.

const transacoes = [100, -20, -30, 50, -10];
let filterBanco = transacoes.filter(number => number < 0)
console.log(`Os valores negativos das transações são ${filterBanco}`)

let reduceBanco = filterBanco.reduce((acumulador, transacao) => acumulador + transacao, 0)
console.log(`O valor sacado foi R$ ${Math.abs(reduceBanco).toFixed(2)}`)

let saldo = transacoes.reduce((acumulador, transacao) => acumulador + transacao, 0)
console.log(`O saldo da conta é R$ ${saldo.toFixed(2)}`)