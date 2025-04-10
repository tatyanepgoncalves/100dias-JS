// Crie uma função `verificarPar(numero)` que retorne `"Par"` ou `"Ímpar"`.

// ```js
// verificarPar(4); // "Par"
// ```

function verificarPar(numero) {
  if (numero % 2 === 0) {
    console.log(`O ${numero} é par.`)
  } else {
    console.log(`O ${numero} é impar`)
  }

}

verificarPar(4)