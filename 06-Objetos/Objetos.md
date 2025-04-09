# 🧩 Objetos em JavaScript
Dominando o jeito JS de organizar informações.

---

## 🧱 O que são objeto?

Objetos são como mochilinhas organizadas.
Dentro delas, você guarda coisas com nome (as **chaves**) e os valores delas.

```js
let personagem = {
  nome: "Taty",
  classe: "Maga",
  nivel: 5
}
```

---

## 🧃 Como criar objetos?
Você escreve as chaves e seus valores dentro de `{}`:

````js
let livro = {
  titulo: "JS Descomplicado",
  autor: "Alguém Muito Nerd",
  paginas: 300
}
````

---

## 🔍 Como acessar propriedades?
Você pode usar **ponto** ou **colchetes**:

````js
console.log(livro.titulo)         // "JS Descomplicado"
console.log(livro["autor"])       // "Alguém Muito Nerd"

````

---

## ✍️ Como alterar e adicionar propriedades?

````js
livro.paginas = 350;             // Alterando
livro.genero = "Tecnologia";     // Adicionando nova

````

---
## ❌ Como remover?

````js
delete livro.autor;

````
---
## 🔁 Como percorrer um objeto?

````js
for (let chave in livro) {
  console.log(`${chave}: ${livro[chave]}`);
}

````
---

## 📦 Objetos em arrays (combo clássico!)

````js
let produtos = [
  { nome: "Mouse", preco: 150 },
  { nome: "Teclado", preco: 200 }
];

console.log(produtos[0].nome); // "Mouse"

````
---
## 📋 Clonando objetos (sem linkar o original)

````js
let original = { nome: "Taty", idade: 20 };
let copia = { ...original }; // ou Object.assign({}, original)

copia.nome = "Outra Pessoa";
console.log(original.nome); // "Taty" (não mudou)

````
---
## 🔨 Funções com objetos

````js
function exibirInfo(usuario) {
  console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}`);
}

exibirInfo({ nome: "Taty", idade: 20 });

````

---
## ✅ Boas práticas
- Dê nomes claros às chaves (evite “x” e “y” sem sentido).
- Use objetos quando quiser agrupar dados relacionados.
- Use const pra declarar objetos (mesmo se as propriedades mudarem).

---
## 🚀 Bora praticar?
Se quiser treinar, dá um pulo no `desafiosObjetos.md `(ou cria o seu próprio arquivo `.js` e sai testando tudo!).

---
Feito com 💜 por [@tatyanepgoncalves](https://github.com/tatyanepgoncalves)