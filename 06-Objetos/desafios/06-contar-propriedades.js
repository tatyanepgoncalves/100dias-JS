// Crie uma função `contarPropriedades(obj)` que retorna quantas propriedades um objeto possui.


const usuario = { nome: "Taty", idade: 20, estado: "MG" }

const totalPropriedades = Object.keys(usuario).length
console.log(`Total de propriedades do objeto: ${totalPropriedades}`)