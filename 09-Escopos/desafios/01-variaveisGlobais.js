// Crie uma variável global chamada `nome` e uma função `saudar()` que exibe um cumprimento utilizando a variável `nome`. Teste o comportamento se a variável for alterada fora da função.

const nome = function saudar(nome) {
  console.log(`Olá, ${nome}`)
}

nome("Taty")