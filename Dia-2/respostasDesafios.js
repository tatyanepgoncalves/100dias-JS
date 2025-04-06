console.log("===== DESAFIO 1 =====\n")
const a = 7
const b = 3
const resultado = a + b

console.log("O resultado da soma:", resultado)

console.log("\n=====================\n")

console.log("===== DESAFIO 2 =====\n")
let idade = 18

if (idade >= 18) {
  console.log("A pessoa é maior de idade.")
} else {
  console.log("A pessoa não é maior de idade.")
}

// Dá para fazer assim também sem o uso if/else

console.log(idade >= 18 ? "Maior de idade" : "Menor de idade")


console.log("\n=====================\n")

console.log("===== DESAFIO 3 =====\n")
let temCafe = true
let temLeite = false

if (temCafe === true && temLeite === true) {
  console.log("É possível fazer café com leite!")
} else {
  console.log("Não é possível fazer café com leite!")
}


// Dá para fazer assim também

if (temCafe && temLeite) {
  console.log("É possível fazer café com leite!")
} else {
  console.log("Não é possível fazer café com leite!")
}


console.log("\n=====================\n")

console.log("===== DESAFIO 4 =====\n")
const usuario = "Taty"
let senha = "1234"
let usuarioDigitado = "Taty"
let senhaDigitada = "1234"

if (usuarioDigitado === usuario && senhaDigitada === senha) {
  console.log("Usuário e senha correta!")
} else {
  console.log("Usuário e/ou senha incorreta!")
}

console.log("\n=====================\n")

console.log("===== DESAFIO 5 =====\n")
let numero = 15
let isNumber = numero % 2 === 0 ? "ímpar" : "par"
console.log(`O número ${numero} é ${isNumber}`)
console.log("\n=====================\n")

console.log("===== DESAFIO 6 =====\n")
let pontos = 10
pontos = pontos += 5

console.log(`O resultado da soma é ${pontos}`)
console.log("\n=====================\n")

console.log("===== DESAFIO 7 =====\n")
let pontosJogo = 120
let vidas = 2

if (pontosJogo >= 100 && vidas >= 3) {
  console.log("O jogador ganhou bônus!")
} else {
  console.log("O jogador não ganhou bônus!")
}

console.log("\n=====================\n")

console.log("===== DESAFIO 8 =====\n")
let estaLigado = true

console.log(!estaLigado)

console.log("\n=====================\n")

console.log("===== DESAFIO 9 =====\n")
let valor = 150
let desconto = valor >= 100 ? valor - (valor * 0.1)  : valor
console.log(desconto.toFixed(2))

console.log("\n=====================\n")

console.log("===== DESAFIO 10 =====\n")
let nome = "Taty";
let minhaIdade = 17;
let temAutorizacao = true;

if (minhaIdade >= 18 || temAutorizacao === true) {
  console.log(`${nome} pode entrar na festa!`)
} else {
  console.log(`${nome} não pode entrar na festa!`)
}

console.log("\n=====================\n")
