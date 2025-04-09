// Crie uma função que recebe um objeto e transforma em um array de pares chave-valor. Exemplo:
// ```js
// entrada: { nome: "Taty", idade: 20 }
// saída: [["nome", "Taty"], ["idade", 20]]
// ```

function transformaEmPares(objeto) {
  const pares = Object.entries(objeto)
  return pares
}

const personagem = {
  nome: "Taty",
  classe: "Maga",
  nivel: 5
}
console.log(transformaEmPares(personagem))