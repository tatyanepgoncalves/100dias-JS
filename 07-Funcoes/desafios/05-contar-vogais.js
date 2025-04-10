// Crie uma função `contarVogais(texto)` que retorne quantas vogais existem na string.

// ```js
// contarVogais("banana"); // 3
// ```


function contarVogais(texto) {
  let vogais = "aeiouAEIOU"
  let contador = 0

  for (let letra of texto) {
    if (vogais.includes(letra)) {
      contador++
    }
  }
  
  console.log(`Na palavra ${texto} tem ${contador} vogais.`)
}

contarVogais("banana")