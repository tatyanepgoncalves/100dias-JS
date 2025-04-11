let soma = 0
for (let number = 1; number <= 20; number++) {
  if (number % 2 === 0) {
    soma += number
  }
}

console.log(`Soma dos pares: ${soma}`)