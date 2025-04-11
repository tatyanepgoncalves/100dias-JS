// Crie uma função `executar` que recebe uma função como parâmetro (callback) e a executa com o valor `"Missão cumprida!"`.

function motivar(mensagem) {
  console.log(mensagem)
}

function executar(callback) {
  callback("Missão comprida!")
}

executar(motivar)