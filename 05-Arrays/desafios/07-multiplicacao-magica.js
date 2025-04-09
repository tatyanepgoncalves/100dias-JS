// Desafio 7 - Multiplicação mágica com map()
// Você tem um array de preços: [10, 20, 30].
// A loja vai aplicar um desconto de 50% em todos.
// Use map() pra retornar os novos valores.

let preco = [10, 20, 30]
let precoNovo = preco.map(b => b - (b * 0.5))

console.log(`Os preços com descontos são: ${precoNovo.join(" | R$ ")}`)
