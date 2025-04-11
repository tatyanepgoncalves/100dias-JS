// Crie uma função chamada `mensagem` que retorna outra função (usando arrow), que imprime `"Função dentro de função ativada!"`.

function mensagem(mensagem) {
  console.log(mensagem)
}

const executar = (funcao) => {
  funcao("Função dentro de outra função.")
}

executar(mensagem)