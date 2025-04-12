// Crie uma função que receba uma data de aniversário (no formato "YYYY-MM-DD") e retorne quantos dias faltam para o próximo aniversário.

let data = new Date(2025, 5, 26)
let agora = new Date()

function aniversario() {
  let resultado = data - agora
  console.log(`Faltam ${resultado} dias para meu aniversário!`)
}

aniversario()
