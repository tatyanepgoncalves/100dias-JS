// 👉 **Desafio:** Use `.filter()` pra retornar só os produtos que custam mais de R$50.
const precos = [10, 25, 60, 15, 100];

function produtosCaros() {
  const precosNovos = precos.filter((valor) => valor >= 50)
  console.log(precosNovos)
}

produtosCaros()