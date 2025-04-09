// Crie um objeto usuario com as propriedades:
// - nome (string)
// - idade (number)
// - devFront (boolean)
// Depois, mostre no console a frase:
// "Olá, meu nome é [nome] e tenho [idade] anos. Sou dev Frontend? [true/false]"

const user = { nome: "Tatyane", idade: 20, devFront: true }
const devStatus = user.devFront ? "Sim" : "Não"
console.log(`Olá meu nome é ${user.nome} e tenho ${user.idade} anos. Sou dev Frontend? ${devStatus}`)