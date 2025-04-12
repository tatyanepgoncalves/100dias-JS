// 👉 **Desafio:** Use `.reduce()` para somar todos os pontos.
const pontos = [10, 20, 30, 40];

const total = pontos.reduce((acumulador, ponto) => acumulador + ponto, 0)

console.log(`O total de pontos são ${total}.`)