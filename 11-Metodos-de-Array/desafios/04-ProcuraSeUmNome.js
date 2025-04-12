// 👉 **Desafio:** Use `.find()` para encontrar o nome "Clara" e exibir no console.

const nomes = ['Taty', 'Bruno', 'João', 'Clara'];

function ProcuraNome() {
  const nome = nomes.find((item) => item === "Clara")
  console.log(nome)
}

ProcuraNome()