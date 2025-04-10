// Crie uma função `filtrarPares(array)` que recebe um array e usa outra função para retornar apenas os números pares.

// ```js
// filtrarPares([1, 2, 3, 4]); // [2, 4]

function filtrarPares(array) {
  let numeros = array
  const numeroPares = numeros.filter(numero => numero % 2 === 0)
  console.log(`Os números pares do Array [${array}] são: [${numeroPares}].`)
}

filtrarPares([1,2,3,4])