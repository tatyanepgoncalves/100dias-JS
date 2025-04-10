Perfeito! Bora pro treino estilo “academia de funções”. 💪  
Separei **10 desafios** divididos em **nível fácil**, **intermediário** e **difícil** pra te ajudar a subir de nível no JavaScript com foco só em **funções**.

---

## 🟢 FÁCIL – Aquecimento (Básico de Funções)
### 1. **Saudação personalizada**
Crie uma função `saudar(nome)` que exibe:  
`"Olá, [nome]! Bem-vindo(a)!"`

```js
saudar("Taty"); // Olá, Taty! Bem-vindo(a)!
```

---

### 2. **Dobro do número**
Crie uma função `dobro(numero)` que retorna o dobro de um número.

```js
dobro(5); // 10
```

---

### 3. **É par ou ímpar?**
Crie uma função `verificarPar(numero)` que retorne `"Par"` ou `"Ímpar"`.

```js
verificarPar(4); // "Par"
```

---

## 🟡 INTERMEDIÁRIO – Subindo de Nível (Parâmetros e Retorno)
### 4. **Calculadora básica**
Crie uma função `calcular(a, b, operador)` que realiza soma, subtração, multiplicação ou divisão.

```js
calcular(10, 5, "+"); // 15
```

---

### 5. **Contar vogais**
Crie uma função `contarVogais(texto)` que retorne quantas vogais existem na string.

```js
contarVogais("banana"); // 3
```

---

### 6. **Maior número de um array**
Crie uma função `maiorNumero(lista)` que retorna o maior número de um array.

```js
maiorNumero([1, 9, 3, 7]); // 9
```

---

## 🔴 DIFÍCIL – Hardcore (Funções dentro de funções, escopo, callback)
### 7. **Função que retorna outra função**
Crie uma função `criarSaudacao(saudacao)` que retorna uma nova função.  
Essa nova função recebe um nome e exibe a saudação com o nome.

```js
const bomDia = criarSaudacao("Bom dia");
bomDia("Taty"); // Bom dia, Taty!
```

---

### 8. **Callback do bem**
Crie uma função `executar(funcao)` que recebe outra função e apenas a executa.

```js
function motivar() {
  console.log("Você é capaz! 🚀");
}

executar(motivar); // Você é capaz!
```

---

### 9. **Função para filtrar números pares**
Crie uma função `filtrarPares(array)` que recebe um array e usa outra função para retornar apenas os números pares.

```js
filtrarPares([1, 2, 3, 4]); // [2, 4]
```

---

### 10. **Escopo e contador**
Crie uma função `contador()` que retorna outra função. A cada vez que a função retornada for chamada, ela deve aumentar o número e mostrar o valor atual.

```js
const contar = contador();
contar(); // 1
contar(); // 2
contar(); // 3
```

> Esse é nível feiticeiro supremo, porque usa **closure** (função + escopo guardado). 🔒🧠

---

Se quiser, posso montar uma pastinha com esses desafios em arquivos separados `.js` ou fazer um mini projeto com HTML + JS pra você treinar interativo estilo quiz. Quer? 😄