# 🧠 Desafios Métodos de Arrays em JavaScript

Aqui estão 10 desafios para praticar sobre **Métodos de Arrays em JavaScript**. Dividi em 3 níveis de dificuldade para te ajudar a avançar no aprendizado.

---

## 🟢 **FÁCIL (aquecimento com estilo)**

### 1. **Lista de Compras com ForEach**
Você tem a seguinte lista:

```js
const compras = ['Pão', 'Leite', 'Café'];
```

👉 **Desafio:** Crie uma função que exiba no console:
```
Item 1: Pão
Item 2: Leite
Item 3: Café
```

---

### 2. **Notas Bônus com Map**
```js
const notas = [6, 7.5, 9];
```

👉 **Desafio:** Use `.map()` pra criar um novo array com +1 ponto em cada nota, sem alterar as originais.

---

### 3. **Filtro de Produtos Caros**
```js
const precos = [10, 25, 60, 15, 100];
```

👉 **Desafio:** Use `.filter()` pra retornar só os produtos que custam mais de R$50.

---

## 🟡 **INTERMEDIÁRIO (agora o jogo começou)**

### 4. **Procura-se um Nome**
```js
const nomes = ['Taty', 'Bruno', 'João', 'Clara'];
```

👉 **Desafio:** Use `.find()` para encontrar o nome "Clara" e exibir no console.

---

### 5. **Soma Total de Pontos**
```js
const pontos = [10, 20, 30, 40];
```

👉 **Desafio:** Use `.reduce()` para somar todos os pontos.

---

### 6. **Tem Aluno Reprovado?**
```js
const notas = [8, 7, 5, 4, 10];
```

👉 **Desafio:** Use `.some()` pra verificar se **algum aluno** tirou nota menor que 6.

---

### 7. **Todo mundo passou?**
👉 **Desafio:** Use `.every()` pra verificar se **todos os alunos** tiraram **nota maior ou igual a 6**.

---

## 🔴 **DIFÍCIL (modo boss battle)**

### 8. **Ranking de Vendas**
```js
const vendedores = [
  { nome: 'Taty', vendas: 120 },
  { nome: 'Lucas', vendas: 300 },
  { nome: 'Nina', vendas: 150 },
];
```

👉 **Desafio:** Ordene os vendedores em ordem decrescente de vendas usando `.sort()`.

---

### 9. **Remover Aluno Específico**
```js
const turma = ['Ana', 'Rafa', 'Taty', 'Leo'];
```

👉 **Desafio:** Use `.splice()` para remover **apenas o aluno 'Taty'** da lista.

---

### 10. **Array Inception (Desafio de Ouro)**
```js
const numeros = [1, 2, 3, 4, 5];
```

👉 **Desafio:** Crie um novo array onde:
- Os números pares sejam multiplicados por 2
- Os ímpares sejam descartados

Use **`.filter()`** e **`.map()`** em sequência pra isso. 🔥
