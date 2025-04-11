// Use `reduce()` com uma arrow function para somar todos os valores de um array.

const valoresArray = [30, 5, 130, 156, 114, 382, 13]

const valorTotal = () => {
  const total = valoresArray.reduce((acumulador, valor) => acumulador + valor, 0)
  
  console.log(`O valor total do Array é R$ ${total.toFixed(2)}`)
}

valorTotal()