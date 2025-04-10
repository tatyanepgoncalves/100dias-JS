// Crie uma função `criarSaudacao(saudacao)` que retorna uma nova função.  
// Essa nova função recebe um nome e exibe a saudação com o nome.

// ```js
// const bomDia = criarSaudacao("Bom dia");
// bomDia("Taty"); // Bom dia, Taty!
// ```

function criarSaudacao(saudacao) {
  console.log(saudacao)
}

function boaNoite(nome) {

  console.log(nome)
}

criarSaudacao("Boa noite")
boaNoite("Taty")