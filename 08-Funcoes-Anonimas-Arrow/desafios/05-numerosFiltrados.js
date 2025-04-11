// Use `filter()` com uma arrow function para retornar apenas os números pares de um array.

const numerosArray = [1,2,3,4,5,6,7,8,9]

const numeros = () => {
  const numerosPares = numerosArray.filter(numero => numero % 2 === 0)
  console.log(`Os numeros pares do Array são ${numerosPares}`)
}


numeros()