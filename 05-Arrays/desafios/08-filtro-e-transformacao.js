// Desafio 8 - Filtro e transformação juntos 🔥
// Dado o array [1, 2, 3, 4, 5, 6]:
// Primeiro use filter() para pegar somente os pares.
// Depois use map() para multiplicar os pares por 10.
// Resultado final esperado: [20, 40, 60].

let numbers = [1, 2, 3, 4, 5, 6]
let filterNumbers = numbers.filter(number => number % 2 === 0)
console.log(filterNumbers)

let mapNumbers = filterNumbers.map(number => number * 10)
console.log(`Os numeros pares multiplicados por 10 são: ${mapNumbers}` )

let resultado = numbers.filter(n => n % 2 === 0).map(n => n * 10)
console.log(`Os numeros pares multiplicados por 10 são: ${resultado}` )