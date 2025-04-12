Booora colocar o JSON pra suar 👊  
Aqui vão **10 desafios** separadinhos por nível — do "estou começando agora" até o "manda vir, tô pronta". Todos práticos, pra te ajudar a **memorizar e aplicar de verdade**!

---

## 🟢 FÁCIL (nível "iniciando no rolê")
### 1. **Transformar objeto em JSON**
```js
// Crie um objeto com seus dados: nome, idade e curso
// Use JSON.stringify pra converter em texto JSON
```

💡 Exemplo:
```js
const pessoa = { nome: "Taty", idade: 20, curso: "Sistemas de Informação" };
const json = JSON.stringify(pessoa);
console.log(json);
```

---

### 2. **Transformar texto JSON em objeto**
```js
// Pegue o texto JSON abaixo e converta em objeto JS usando JSON.parse
const json = '{"linguagem":"JavaScript","nivel":"iniciante"}';
```

---

### 3. **Criar um JSON com lista de tarefas**
```js
// Crie um JSON com uma lista (array) de 3 tarefas: título e status (concluída ou não)
```

💡 Exemplo de estrutura:
```json
[
  { "titulo": "Estudar JSON", "feito": true },
  { "titulo": "Tomar café", "feito": false },
  { "titulo": "Fazer desafio", "feito": false }
]
```

---

## 🟡 INTERMEDIÁRIO (nível "já peguei o jeito")

### 4. **Ler dados de um JSON e exibir mensagem**
```js
// Dado este JSON:
const json = '{"nome":"Taty","notas":[8, 9.5, 7]}';
// Converta e mostre: "Taty tirou média X"
```

---

### 5. **Salvar e resgatar dados com localStorage**
```js
// Crie um objeto com info de login: email e senha
// Salve com localStorage (convertendo em JSON)
// Depois resgate e exiba os dados
```

---

### 6. **Filtrar dados de um array JSON**
```js
// Dado este JSON:
const produtos = `[
  {"nome": "Camiseta", "preco": 30},
  {"nome": "Calça", "preco": 70},
  {"nome": "Boné", "preco": 20}
]`;
// Mostre apenas os produtos com preço menor que 50
```

---

## 🔴 DIFÍCIL (nível "dev ninja em treinamento")

### 7. **Fazer uma função que converte qualquer objeto em JSON e salva no localStorage**
```js
// Crie uma função chamada salvarDados(chave, objeto)
// Use JSON.stringify e localStorage
```

---

### 8. **Validar estrutura de um JSON**
```js
// Crie uma função que recebe uma string JSON
// Verifique se ela é válida usando try/catch com JSON.parse
```

---

### 9. **Transformar JSON em HTML dinâmico**
```js
// Com este JSON de usuários:
const dados = `[{"nome":"Ana"},{"nome":"Bruno"},{"nome":"Carlos"}]`;
// Mostre em tela: <li>Ana</li>, <li>Bruno</li>, etc.
```

---

### 10. **Enviar dados para uma API fake usando fetch + JSON**
```js
// Use o site https://jsonplaceholder.typicode.com/posts
// Envie um objeto com título e corpo via POST usando fetch
```

💡 Dica:
```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ titulo: "Oi", corpo: "Teste de JSON" })
})
  .then(res => res.json())
  .then(dado => console.log(dado));
```
