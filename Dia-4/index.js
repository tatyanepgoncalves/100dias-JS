// 🟢 FÁCIL (nível "aquecimento")

// DESAFIO 1 - Contador de 1 a 10

for (let numero = 1; numero <= 10; numero++) {
  console.log(numero)
}
// DESAFIO 2 - Soma dos Números Pares de 1 a 20
let soma = 0
for (let number = 1; number <= 20; number++) {
  if (number % 2 === 0) {
    soma += number
  }
}

console.log(`Soma dos pares: ${soma}`)


// DESAFIO 3 - Contagem Regressiva para o Lançamento
let number = 11

while (number > 0) {
  console.log(number)
  number--
}

console.log("Lançamento!")

//🟡 INTERMEDIÁRIO  
// DESAFIO 4 - Contador de Vogais
let frase = "Olá mundo"
let vogais = "aeiouAEIOU"
let contador = 0

for (let vogal of frase) {
  if (vogais.includes(vogal)) {
    contador++
  }
}
console.log(`Na frase ${frase} tem ${contador} vogais.`)

// DESAFIO 5 - Tabuada do 7
let tabuada = 7

for (let i = 1; i <= 10; i++) {
  console.log(`${tabuada} x ${i} = ${tabuada * i}`)
}

// DESAFIO 6 - Lista de Compras com `for...in`
let lista = {
  arroz: 2,
  leite: 1,
  banana: 6
};

for (let item in lista) {
  console.log(`${item}: ${lista[item]}`)
  console.log(`Você comprou ${lista[item]} ${item}(s)`);
}

// DESAFIO 7 - Detecta Palíndromo
let palavra = "radar";
let aoContrario = palavra.split("").reverse().join("");

if (palavra === aoContrario) {
  console.log(`"${palavra}" é um palíndromo!`);
} else {
  console.log(`"${palavra}" não é um palíndromo.`);
}


// DESAFIO 8 - Desafio FizzBuzz

for (let i = 1; i <= 100; i++) {

  if (i % 3 && i % 5)  {
    console.log("Fizz")
  } else if (i % 3) {
    console.log("Buzz")
  } else if (i % 5) {
    console.log("FizzBuzz")
  } else {
    console.log(i)
  }
}

// DESAFIO 9 -

let fraseJs = "javascript é top"
let fraseUpper = fraseJs.toUpperCase()
let fraseLower = fraseJs.toLowerCase()

for (let letra of fraseJs) {
  console.log(`${letra}  | ${fraseLower} | ${fraseUpper}`)
}

// DESAFIO 10 -
let degrau = 5

for (let i = 1; i <= 5; i++) {
  console.log("#".repeat(i))
}
