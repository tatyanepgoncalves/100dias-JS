// Crie um JSON com uma lista (array) de 3 tarefas: título e status (concluída ou não)

const lista = [
  { titulo: "Estudar JSON", feito: true },
  { titulo: "Tomar café", feito: true },
  { titulo: "Fazer desafio", feito: false }
]

const listaJson = JSON.stringify(lista)
console.log(listaJson)