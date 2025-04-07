# ➰ Desafios com Loops
10 desafios práticos com uso de **Loop** divididos entre o 3 níveis - **fácil, intermediário e difícil**, com ideias práticas e até divertidas. 

---

## 🟢 **FÁCIL (nível "aquecimento")**

### 1. **Contador de 1 a 10**
> Usa: `for`

Crie um programa que imprime os números de 1 a 10 no console.

```js
// Saída esperada:
// 1
// 2
// ...
// 10
```

---

### 2. **Soma dos Números Pares de 1 a 20**
> Usa: `for` + operador `%`

Mostre a soma de todos os números pares de 1 até 20.

---

### 3. **Contagem Regressiva para o Lançamento**
> Usa: `while`

Simule uma contagem regressiva de 10 até 0. Ao final, exiba: `"🚀 Lançamento!"`

---

## 🟡 **INTERMEDIÁRIO (nível "agora vai")**

### 4. **Contador de Vogais**
> Usa: `for...of`

Peça uma frase e conte quantas vogais tem nela (sem contar acento).

```js
// Ex: "Olá mundo" → 4 vogais
```

---

### 5. **Tabuada do 7**
> Usa: `for`

Gere a tabuada do número 7 até o 10:

```js
// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70
```

---

### 6. **Lista de Compras com `for...in`**
> Usa: `for...in`

Crie um objeto com itens e quantidades. Exiba no console:

```js
let lista = {
  arroz: 2,
  leite: 1,
  banana: 6
};

// Saída:
// arroz: 2
// leite: 1
// banana: 6
```

---

## 🔴 **DIFÍCIL (nível "desenvolvedora full em construção")**

### 7. **Detecta Palíndromo**
> Usa: `for`, string, lógica

Crie um programa que verifica se uma palavra é um **palíndromo** (tipo "radar" ou "arara").

---

### 8. **Desafio FizzBuzz**
> Usa: `for` + `if`

De 1 a 100:

- Se múltiplo de 3 → escreva `"Fizz"`
- Se múltiplo de 5 → `"Buzz"`
- Se de ambos → `"FizzBuzz"`
- Senão, mostra o número mesmo

---

### 9. **Transforma frase em alternância maiúscula/minúscula**
> Usa: `for`, `charAt`, `toUpperCase()`, `toLowerCase()`

```js
// Ex: "javascript é top"
// Saída: "JaVaScRiPt É ToP"
```

---

### 10. **Desenha uma escada com "#"**
> Usa: loop + string

O usuário escolhe o número de degraus e você imprime algo assim:

```js
// Se n = 5:
// #
// ##
// ###
// ####
// #####
```
