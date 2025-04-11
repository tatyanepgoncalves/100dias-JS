let frase = "Olá mundo"
let vogais = "aeiouAEIOU"
let contador = 0

for (let vogal of frase) {
  if (vogais.includes(vogal)) {
    contador++
  }
}
console.log(`Na frase ${frase} tem ${contador} vogais.`)