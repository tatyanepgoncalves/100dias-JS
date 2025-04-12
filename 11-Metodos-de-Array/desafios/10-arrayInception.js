const numeros = [1, 2, 3, 4, 5];


// 👉 **Desafio:** Crie um novo array onde:
// - Os números pares sejam multiplicados por 2
// - Os ímpares sejam descartados
// Use **`.filter()`** e **`.map()`** em sequência pra isso. 🔥

const numerosPares = numeros.filter((numero) => numero % 2 === 0)
console.log(numerosPares) 
numerosPares.map((item) => {
  console.log(`O dobro do número ${item} é ${item * 2}.`)
})
