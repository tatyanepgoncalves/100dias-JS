Perfeitooo, Taty! Se tu quer sair **destruindo com objetos em JS**, bora treinar do básico ao nível boss final. Aqui vão **10 desafios divididos em fácil, intermediário e difícil**, com vibe prática e criativa pra treinar com estilo.

---

## 🟢 **Nível Fácil (aquecimento do cérebro)**

### 1. **Ficha de Personagem**
Crie um objeto chamado `personagem` com propriedades como `nome`, `classe`, `nível`, `vida`, `mana`. Depois, exiba todas as infos com `console.log`.

### 2. **Adicionando uma nova habilidade**
Adicione a propriedade `habilidadeEspecial` no objeto `personagem` e coloque como valor "Explosão de Código". Depois, atualize o `nível` para 2.

### 3. **Loop mágico**
Use um `for...in` para exibir cada chave e valor do objeto `personagem`. Ex: `nome: Taty`, `classe: Mago`, etc.

---

## 🟡 **Nível Intermediário (agora vai complicar um pouquinho)**

### 4. **Array de objetos - Catálogo de produtos**
Crie um array `produtos` com 3 objetos representando produtos. Cada objeto deve ter: `nome`, `preço`, `emEstoque`.

```js
[
  { nome: "Mouse Gamer", preço: 150, emEstoque: true },
  ...
]
```

Depois, percorra o array e exiba os produtos que estão em estoque.

### 5. **Soma dos preços**
Some o valor total dos produtos que estão em estoque. Mostre o resultado no console.

### 6. **Contador de propriedades**
Crie uma função `contarPropriedades(obj)` que retorna quantas propriedades um objeto possui. Exemplo:

```js
const usuario = { nome: "Taty", idade: 20, cidade: "SP" };
contarPropriedades(usuario); // 3
```

---

## 🔴 **Nível Difícil (boss da fase dos Objetos)**

### 7. **Sistema de login simplificado**
Crie um array `usuarios`, onde cada objeto representa um usuário com `email` e `senha`. Depois, crie uma função `login(email, senha)` que verifica se o usuário existe e retorna `"Login bem-sucedido"` ou `"Usuário ou senha inválidos"`.

### 8. **Transformar objeto em array**
Crie uma função que recebe um objeto e transforma em um array de pares chave-valor. Exemplo:

```js
entrada: { nome: "Taty", idade: 20 }
saída: [["nome", "Taty"], ["idade", 20]]
```

### 9. **Clone + alteração**
Crie um objeto e depois um clone dele (sem usar o original). Altere a propriedade de um e prove que o outro não mudou. Dica: use `Object.assign` ou spread `...`.

### 10. **Banco de dados fictício (CRUD básico)**
Crie um mini sistema que:
- Adiciona um novo "cliente" (objeto com nome, idade e saldo)
- Lista todos os clientes
- Atualiza o saldo de um cliente
- Remove um cliente por nome

💡 Pode ser tudo via funções. Ex: `addCliente(cliente)`, `listarClientes()`, `removerCliente(nome)`, etc.

---

Se quiser, eu posso montar um **PDF bonitão com os desafios + espaço pra respostas**, ou um **repositório modelo no GitHub** com os arquivos já estruturados. Só dizer! 😄