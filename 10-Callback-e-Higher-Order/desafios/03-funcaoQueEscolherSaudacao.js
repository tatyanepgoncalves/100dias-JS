// Crie uma função `escolherSaudacao(nome, callback)` e permita passar diferentes formas de saudar como callback:  
// Exemplo de callbacks:
// - `saudacaoFormal = nome => console.log("Bom dia, " + nome)`
// - `saudacaoCasual = nome => console.log("E aí, " + nome + "?")`

function escolherSaudacao(nome, callback) {
  console.log(`${nome}, ${callback}`)
}