// Crie uma função `executar(funcao)` que recebe outra função e apenas a executa.

// ```js
// function motivar() {
//   console.log("Você é capaz! 🚀");
// }

// executar(motivar);

function motivar(mensagem) {
  console.log(mensagem)
}

function executar(funcao) {
  console.log(funcao)
}

motivar("Você é capaz!")
executar(motivar)