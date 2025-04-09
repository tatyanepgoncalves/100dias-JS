// Crie um script que tenha as seguintes variáveis:
// - nome com o valor "Taty" (tipo string)
// - idade com o valor 20 (tipo number)
// - profissão sem valor definido (vai ficar undefined)
// - gostaDeCafé com valor null
// - devFront com valor true

// Agora, imprima no console:
// - O tipo de cada variável usando typeof
// - Uma mensagem amigável usando template string com os dados de nome, idade e devFront
// - Um `if` que verifica se profissão está undefined e exibe: "Profissão ainda não definida."
// - Um `if` que verifica se gostaDeCafé é null e exibe: "Precisa descobrir se gosta de café!"


const nome = "Tatyane"
let idade = 20
let profissao
const gostaDeCafe = null
let frontDev = true

console.log(`O tipo da váriavel nome é: ${typeof nome}`)
console.log(`O tipo da váriavel idade é: ${typeof idade}`)
console.log(`O tipo da váriavel profissao é: ${typeof profissao}`)
console.log(`O tipo da váriavel gostaDeCafe é: ${typeof gostaDeCafe}`)
console.log(`O tipo da váriavel frontDev é: ${typeof frontDev}`)

console.log(`Meu nome é ${nome}, tenho  ${idade} anos e estou estudando JS: ${frontDev}`)

if (profissao === undefined) {
  console.log("Profissão ainda não definida.")
} else {
  console.log(`Minha profissão é ${profissao}`)
}

if (gostaDeCafe === null) {
  console.log("Precisa descobrir se gosta de café!")
} else {
  console.log(`Gosto de café ${gostaDeCafe}`)
}