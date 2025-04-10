// Crie uma função `maiorNumero(lista)` que retorna o maior número de um array.

// ```js
// maiorNumero([1, 9, 3, 7]); // 9
// ```


function maiorNumero(lista) {
  let maior = lista[0]

  for(let numero of lista) {
    if (numero > maior) {
      maior = numero
    }
  }

  console.log(`O maior número da ${lista} é ${maior}.`)
}

maiorNumero([1, 5, 9, 3]);