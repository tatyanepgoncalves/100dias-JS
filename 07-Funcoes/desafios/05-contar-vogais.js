// Crie uma função `contarVogais(texto)` que retorne quantas vogais existem na string.

// ```js
// contarVogais("banana"); // 3
// ```


function contarVogais(texto) {
  let palavra = texto
  let vogais = "aeiouAEIOU"
  let contador = 0

  for (let vogal in palavra) {
    if (vogais.includes(vogal)) {
      contador++
    }
  }
  
  console.log(`Na palavra ${palavra} tem ${contador} vogais.`)
}

contarVogais("banana")