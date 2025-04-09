// Crie um objeto e depois um clone dele (sem usar o original). Altere a propriedade de um e prove que o outro não mudou. Dica: use `Object.assign` ou spread `...`.

const original = { nome: "Taty", idade: 20 }
const clone = Object.assign({}, original)

clone.nome = "Clonada"

console.log("Original:", original) 
console.log("Clone:", clone)     



const cloneSpred = { ...original }

cloneSpred.nome = "Clonada"

console.log("Original:", original) 
console.log("Clone:", cloneSpred)       
