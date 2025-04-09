// Desafio 3 - Fatiando o bolo 🎂 (slice)
// Crie um array com 5 camadas de um bolo.
// Use slice() para pegar apenas as camadas do meio (índices 1 a 3).
// Mostre as camadas selecionadas e o array original.

let bolo = ["Chocolate", "Coco", "Leite Ninho", "Brigadeiro", "Abacaxi"]

let camadas = bolo.slice(1, 4)
console.log(camadas)