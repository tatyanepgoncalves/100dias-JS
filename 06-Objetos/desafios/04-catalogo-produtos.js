// Crie um array `produtos` com 3 objetos representando produtos. Cada objeto deve ter: `nome`, `preço`, `emEstoque`.

// Depois, percorra o array e exiba os produtos que estão em estoque.

let produtos = [
  { nome: "Mouse Gamer", preco: 150, emEstoque: true },
  { nome: "Computador", preco: 4500, emEstoque: true },
  { nome: "Ipad", preco: 3000, emEstoque: false },
]

for (let i = 0; i < produtos.length; i++) {
  if (produtos[i].emEstoque) {
    console.log(`Produto disponível: ${produtos[i].nome} - R$ ${produtos[i].preco}`)
  }
}
