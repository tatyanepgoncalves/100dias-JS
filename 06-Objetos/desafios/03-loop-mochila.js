// Use um `for...in` para exibir cada chave e valor do objeto `personagem`. Ex: `nome: Taty`, `classe: Mago`, etc.

let personagem = {
  nome: "Taty",
  classe: "Mago",
  nivel: 5,
  vida: 3,
  mana: "Mana",
  habilidadeEspecial: 'Explosão de Código'
}

for (let chave in personagem) {
  console.log(`${chave}: ${personagem[chave]}`)
}