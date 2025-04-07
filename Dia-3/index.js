// Desafio 1

let idade = 18

if (idade >= 18) {
  console.log("Pode entrar!")
} else {
  console.log("Entrada proibida!")
}



// Desafio 2
const number = 10
let isNumber = number % 2 === 0 ? "par" : "impar"

console.log(`O número ${number} é ${isNumber}!`)

// Desafio 3
let nota = 5
const statusNota = nota >= 7 ? "aprovado" : "reprovado"

console.log(`O aluno está ${statusNota}.`)

// Desafio 4
let peso = 22
let altura = 0.97
const imc = peso / (altura ** 2)
const imcFormatado = imc.toFixed(1)

const pesoAbaixo = 18.5
const pesoNormal = 24.9

if (imc < pesoAbaixo) {
  console.log("Magreza")
} else if (imc >= pesoAbaixo && imc <= pesoNormal) {
  console.log("Normal")
} else {
  console.log("Sobrepeso")
}

console.log(`Seu IMC é ${imcFormatado}`);

// Desafio 5

const turno = "V"

switch (turno) {
  case "M":
    console.log("Você estuda no turno matutino.")
    break
  case "V":
    console.log("Você estuda no turno vespertino.")
    break
  case "N":
    console.log("Você estuda no turno noturno.")
    break
  default: 
    console.log("Insira o seu turno de estudo!")
}

// Desafio 6
let numberSecret = 7
let userNumner = 5

if (userNumner === numberSecret) {
  console.log("Acertou!")
} else {
  console.log("Errou... tente de novo!")
}


// Desafio 7
let color = "verde"

switch (color.toLowerCase()) {
  case "verde":
    console.log("Siga!")
    break
  case "amarelo":
    console.log("Atenção!")
    break
  case "vermelho":
    console.log("Pare!")
    break
  default :
    console.log("Insira uma cor do semáforo!")
}

// Desafio 8
let valorCompra = 100
let cupomDesconto = ""
let valorFinal

if (cupomDesconto === "DESC10") {
  valorFinal = valorCompra - (valorCompra * 0.1)
} else if (cupomDesconto === "DESC20") {
  valorFinal = valorCompra - (valorCompra * 0.2)
} else {
  valorFinal = valorCompra
}

console.log(`Compra original: R$ ${valorCompra}`);
console.log(`Cupom aplicado: ${cupomDesconto || "nenhum"}`);
console.log(`Valor final: R$ ${valorFinal}`);

// Desafio 9
const user = "admin"
const password = "1234"

if (user === "admin" && password === "1234") {
  console.log("Login bem sucedido!")
} else {
  console.log("Usuário ou senha incorretos.")
}

// Desafio 10
let lado1 = 5
let lado2 = 6
let lado3 = 7

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
  if (lado1 === lado2 && lado2 === lado3) {
    console.log("Triângulo Equilátero");
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Triângulo Isósceles");
  } else {
    console.log("Triângulo Escaleno");
  }
} else {
  console.log("Os lados não formam um triângulo!")
}