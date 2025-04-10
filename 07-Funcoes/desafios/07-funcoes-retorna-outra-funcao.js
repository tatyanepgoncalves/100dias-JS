// Crie uma função `criarSaudacao(saudacao)` que retorna uma nova função.  
// Essa nova função recebe um nome e exibe a saudação com o nome.

// ```js
// const bomDia = criarSaudacao("Bom dia");
// bomDia("Taty"); // Bom dia, Taty!
// ```

function criarSaudacao(saudacao) {
  return function (nome) {
    console.log(`${saudacao}, ${nome}!`)
  }
}

const bomDia = criarSaudacao("Bom dia")

bomDia("Taty")