// Some o valor total dos produtos que estão em estoque. Mostre o resultado no console.

let produtos = [
  { nome: "Mouse Gamer", preco: 150, emEstoque: true },
  { nome: "Computador", preco: 4500, emEstoque: true },
  { nome: "Ipad", preco: 3000, emEstoque: false },
]

let soma = 0

for (let i = 0; i < produtos.length; i++) {
  soma += produtos[i].preco 

}

console.log(`A soma dos produtos é: R$ ${soma.toFixed(2)}`)