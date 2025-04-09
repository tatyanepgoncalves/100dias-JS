# 🧠 Variáveis e Tipos de Dados em JavaScript
> Entendendo a base de tudo no JS com exemplos simples e diretos.

---

### 📦 O que são variáveis?

Variáveis são como **caixinhas** onde você guarda informações.  
Elas podem ser textos, números, listas, objetos... o que você quiser!

---

### 🧃 Como declarar variáveis?

No JavaScript, temos três formas principais:

```js
let nome = "Taty";     // Pode mudar depois
const idade = 20;      // Fixa, não pode mudar
var cidade = "SP";     // Antigo, evite usar
```

> 💡 Use `let` e `const` no dia a dia. `var` ficou pra trás.

---

### 🏷️ Tipos de Dados

JS é uma linguagem de **tipagem dinâmica**, ou seja, você não precisa dizer o tipo... ele descobre sozinho.

| Tipo | Exemplo | Descrição |
|------|---------|-----------|
| `string` | `"Olá"` | Texto entre aspas |
| `number` | `42` | Qualquer número |
| `boolean` | `true` ou `false` | Verdadeiro ou falso |
| `undefined` | `let x;` | Variável sem valor |
| `null` | `let y = null` | Valor vazio intencional |
| `object` | `{ nome: "Taty" }` | Conjunto de pares chave-valor |
| `array` | `[1, 2, 3]` | Lista de valores |

---

### 🔍 Usando `typeof` para identificar o tipo

```js
let idade = 20;
console.log(typeof idade); // "number"
```

---

### 🧪 Exemplos rápidos:

```js
let nome = "Taty";             // string
let idade = 20;                // number
let devFront = true;           // boolean
let profissao;                 // undefined
let gostaDeCafe = null;        // null

console.log(typeof nome);       // "string"
console.log(typeof profissao);  // "undefined"
console.log(typeof gostaDeCafe); // "object" (bug do JS)
```

---

### ⚠️ Curiosidade sobre `null`

```js
console.log(typeof null); // "object"
```

> Isso é um bug antigo no JavaScript. Era pra ser `"null"`, mas ficou `"object"` e nunca foi corrigido. 🤡

---

### ✅ Boas práticas

- Use `const` sempre que o valor **não precisar mudar**.
- Use `let` se você **for mudar** o valor depois.
- Não use `var` — ele tem comportamento imprevisível.
- Dê nomes de variáveis **claros e em camelCase**.

---

### 🚀 Bora praticar?

Se quiser treinar, crie um arquivo `.js` e brinque com os desafios que estão no arquivo `desafios.md`.


---

Feito com 💜 por [@tatyanepgoncalves](https://github.com/tatyanepgoncalves)
