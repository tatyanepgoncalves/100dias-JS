# Desafios Callback e Higher Order em JavaScript

Aqui estão 10 desafios para praticar sobre **Callback e Higher Order em JavaScript**. Dividi em 3 níveis de dificuldade para te ajudar a avançar no aprendizado.
---

## 🟢 **NÍVEL FÁCIL (entendendo o básico)**

### 1. **Callback do bom dia**
Crie uma função `cumprimentar()` que receba outra função como parâmetro (callback). A função callback deve imprimir uma mensagem tipo: `"Bom dia, Taty!"`.

---

### 2. **Contador feliz**
Crie uma função `contar(numero, callback)` que conte de 1 até o número passado e chame o `callback` no final com a mensagem: `"Contagem finalizada!"`.

---

### 3. **Função que escolhe a saudação**
Crie uma função `escolherSaudacao(nome, callback)` e permita passar diferentes formas de saudar como callback:  
Exemplo de callbacks:
- `saudacaoFormal = nome => console.log("Bom dia, " + nome)`
- `saudacaoCasual = nome => console.log("E aí, " + nome + "?")`

---

## 🟡 **NÍVEL INTERMEDIÁRIO (com lógica mais elaborada)**

### 4. **Mini sistema de pedidos**
Crie uma função `realizarPedido(pedido, callbackEntrega)` que:
- Mostre: `"Pedido de X realizado com sucesso!"`
- Depois de 2 segundos (use `setTimeout`), execute o `callbackEntrega` com a mensagem: `"Pedido entregue!"`

---

### 5. **Filtrar números pares**
Crie uma função `filtrar(array, callback)` que retorne um novo array com os elementos que passarem no teste do callback.  
Exemplo:
```js
filtrar([1,2,3,4,5], n => n % 2 === 0) // [2, 4]
```

---

### 6. **Personalizando mensagens**
Crie uma função `mensagemPersonalizada(nome, callbackEstilo)` onde o `callbackEstilo` decide o formato da mensagem:
```js
gritar = nome => nome.toUpperCase() + '!!!'
sussurrar = nome => nome.toLowerCase() + '...'
```

---

## 🔴 **NÍVEL DIFÍCIL (criatividade e abstração)**

### 7. **Função que retorna função (higher-order)**
Crie uma função `criarOperacao(operador)` que retorne uma nova função para operar dois números.
```js
const soma = criarOperacao('+');
soma(2, 3) // 5
```

---

### 8. **Execução condicional**
Crie uma função `executarSeVerdadeiro(valor, callback)` que só execute o `callback()` se o `valor` for verdadeiro.

---

### 9. **Pipeline de transformações**
Crie uma função `aplicarTransformacoes(valor, funcoesArray)` que receba um valor inicial e aplique todas as funções do array em sequência, tipo um *pipeline*.

Exemplo:
```js
aplicarTransformacoes(2, [x => x + 1, x => x * 2]) // 6
```

---

### 10. **Mini sistema de rotas (versão simplificada)**
Crie uma função `rota(path, callback)` que simula um sistema de rotas de uma SPA:
```js
rota('/home', () => console.log('Você está na Home'))
rota('/sobre', () => console.log('Sobre nós'))
```

Chame a função com diferentes caminhos e callbacks.

