// Crie um mini sistema que:
// - Adiciona um novo "cliente" (objeto com nome, idade e saldo)
// - Lista todos os clientes
// - Atualiza o saldo de um cliente
// - Remove um cliente por nome

// 💡 Pode ser tudo via funções. Ex: `addCliente(cliente)`, `listarClientes()`, `removerCliente(nome)`, etc.

let clientes = [
  { nome: "Nicole", idade: 28, saldo: 5000 }
]

function addCliente(novoCliente) {
  clientes.push(novoCliente)
}

function listarClientes() {
  console.log("Lista de Clientes:")
  clientes.forEach((cliente, index) => {
    console.log(`${index + 1}. Nome: ${cliente.nome}, Idade: ${cliente.idade}, Saldo: R$ ${cliente.saldo.toFixed(2)}`)
  })
}

function updateSaldo(nome, novoSaldo) {
  const cliente = clientes.find(c => c.nome === nome)

  if (cliente) {
    cliente.saldo = novoSaldo

    console.log(`Saldo de ${nome} atualizado para R$ ${novoSaldo}`)
  }
}

function removerCliente(nome){
  const index = clientes.findIndex(c => c.nome === nome)

  if (index !== -1) {
    clientes.splice(index, 1)
    console.log(`O cliente ${nome} foi removido com sucesso!`)
  } else {
    console.log(`Cliente não encontrado!`)
  }
}

addCliente({ nome: "Taty", idade: 20, saldo: 2000 })
addCliente({ nome: "João", idade: 30, saldo: 3500 })

listarClientes()

updateSaldo("Taty", 5000)

removerCliente("João")

listarClientes()
