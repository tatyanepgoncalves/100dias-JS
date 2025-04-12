// Crie uma função `cumprimentar()` que receba outra função como parâmetro (callback). A função callback deve imprimir uma mensagem tipo: `"Bom dia, Taty!"`.

function comprimentar(saudacao) {
  console.log(saudacao)
}

function executar(callback) {
  callback("Bom dia, Taty!")
}

executar(comprimentar)