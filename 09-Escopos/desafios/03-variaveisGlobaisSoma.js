// Declare uma variável global `a = 5`. Crie uma função chamada `somar()` que adicione `a` com o valor passado como argumento e exiba o resultado.

const a = 5

function somar(a, valor) {
  const resultado = a + valor
  console.log(`O resultado da soma ${a} + ${valor} = ${resultado}.`)
}

somar(5, 8)