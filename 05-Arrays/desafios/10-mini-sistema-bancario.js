// Desafio 10 - Mini sistema bancário 🏦
// Crie um array de transações com valores positivos (depósitos) e negativos (saques):
// Use filter() pra pegar só os saques (valores negativos).
// Use reduce() pra saber quanto foi sacado no total.
// Depois use reduce() pra saber o saldo final da conta.

const transacoes = [100, -20, -30, 50, -10];
let filterBanco = transacoes.filter(number => number < 0)
console.log(`Os valores negativos das transações são ${filterBanco}`)

let reduceBanco = filterBanco.reduce((acumulador, transacao) => acumulador + transacao, 0)
console.log(`O valor sacado foi R$ ${Math.abs(reduceBanco).toFixed(2)}`)

let saldo = transacoes.reduce((acumulador, transacao) => acumulador + transacao, 0)
console.log(`O saldo da conta é R$ ${saldo.toFixed(2)}`)