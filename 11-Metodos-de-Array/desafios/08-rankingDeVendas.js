// 👉 **Desafio:** Ordene os vendedores em ordem decrescente de vendas usando `.sort()`.

const vendedores = [
  { nome: 'Taty', vendas: 120 },
  { nome: 'Lucas', vendas: 300 },
  { nome: 'Nina', vendas: 150 },
];

const alfabetica = vendedores.sort((a, b) => a - b)
console.log(alfabetica)