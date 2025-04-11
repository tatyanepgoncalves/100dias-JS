let valorCompra = 100
let cupomDesconto = ""
let valorFinal

if (cupomDesconto === "DESC10") {
  valorFinal = valorCompra - (valorCompra * 0.1)
} else if (cupomDesconto === "DESC20") {
  valorFinal = valorCompra - (valorCompra * 0.2)
} else {
  valorFinal = valorCompra
}

console.log(`Compra original: R$ ${valorCompra}`);
console.log(`Cupom aplicado: ${cupomDesconto || "nenhum"}`);
console.log(`Valor final: R$ ${valorFinal}`);
