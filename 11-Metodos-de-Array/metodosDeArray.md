# 🧠 Métodos de Arrays em JavaScript

---

## `.forEach()` – A Fada do Café
Imagina que você tá em uma cafeteria mágica e tem várias xícaras na sua mesa (essas são os itens do array). A Fada `.forEach()` passa de xícara em xícara, dá um gole em cada uma e faz um comentário.

🔮 **Moral da história**: Ela não muda as xícaras, só interage com cada uma.

```js
xicaras.forEach((xicara) => {
  console.log(`Hmm, essa ${xicara} tá deliciosa!`);
});
```

---

## `.map()` – A Estilista de Look
Você tem uma pilha de roupas básicas (array). A estilista `.map()` pega cada peça, customiza e devolve uma nova versão toda fashion.

🔮 **Moral da história**: Cria um **novo array** com o resultado da transformação.

```js
const basicos = ["camiseta", "calça"];
const estilosos = basicos.map((peca) => `✨${peca} estilizada✨`);
```

---

## `.filter()` – O Segurança da Balada
Você tem uma fila gigante (array). O `.filter()` é o segurança da porta da balada. Ele só deixa entrar quem atende ao requisito (idade, por exemplo).

🔮 **Moral da história**: Retorna um novo array com os itens **que passaram no teste**.

```js
const pessoas = [18, 22, 16, 30];
const maioresDeIdade = pessoas.filter((idade) => idade >= 18);
```

---

## `.find()` – O Detetive
Você perdeu seu celular no meio do rolê (array). O `.find()` é o detetive que vai procurar **o primeiro item que bate com a descrição**.

🔮 **Moral da história**: Ele para no **primeiro match** e te entrega.

```js
const produtos = ["chave", "celular", "carteira"];
const achado = produtos.find((item) => item === "celular");
```

---

## `.reduce()` – A Contadora de Tesouro
Você tem um baú com moedas espalhadas (array de valores). A contadora `.reduce()` vai somando tudo e te dá o valor total do tesouro.

🔮 **Moral da história**: Reduz um array a um único valor (soma, média, concat...).

```js
const moedas = [1, 2, 5];
const total = moedas.reduce((acumulador, moeda) => acumulador + moeda, 0);
```

---

## `.some()` – O Fofoqueiro
Você tá perguntando se **alguém** do grupo (array) já ficou com tal pessoa. O fofoqueiro `.some()` só precisa de **uma confirmação** e já sai espalhando.

🔮 **Moral da história**: Retorna `true` se **pelo menos um item** atender a condição.

```js
const alunos = [12, 17, 20];
const temMaior = alunos.some((idade) => idade >= 18); // true
```

---

## `.every()` – O Fiscal de Uniforme
Ele quer que **todo mundo** esteja de uniforme. Se **um só** tiver sem, já barra geral.

🔮 **Moral da história**: Só retorna `true` se **todos** atenderem a condição.

```js
const uniforme = ["sim", "sim", "não"];
const todosDeUniforme = uniforme.every((resposta) => resposta === "sim"); // false
```

---

## `.includes()` – O Detector de Cringe
Você tem uma lista de palavras proibidas no grupo. O `.includes()` te diz se uma delas foi usada.

🔮 **Moral da história**: Verifica se o array **contém** o valor específico.

```js
const proibidas = ["cringe", "brother"];
proibidas.includes("cringe"); // true
```

---

## `.sort()` – A OrganizaDORA
Essa é a amiga que **ama** deixar tudo em ordem alfabética ou numérica (mas às vezes bagunça os números, cuidado com isso).

🔮 **Moral da história**: Organiza os itens, mas pode precisar de ajuda com números.

```js
const bagunca = [100, 5, 20];
bagunca.sort((a, b) => a - b); // [5, 20, 100]
```

---

## `.splice()` – O Cirurgião Plástico
Esse método entra no array e faz mudanças drásticas: remove, adiciona, troca elementos.

🔮 **Moral da história**: **Mexe diretamente** no array original.

```js
const agenda = ["segunda", "quarta"];
agenda.splice(1, 0, "terça"); // ['segunda', 'terça', 'quarta']
```

