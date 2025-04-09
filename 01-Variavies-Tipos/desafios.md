# Desafios com variavés e tipos de variáveis

## 🧳 Desafio 1: a mala mágica
Crie 3 variáveis usando let com os seguintes conteúdos:
- Seu nome (string)
- Sua idade (number)
- Se você está estudando JavaScript (boolean)

## 🧃 Desafio 2: Troque o suco
Crie uma variável let com valor "laranja", depois troque para "morango".

## 🔐 Desafio 3: Garrafa selada
Crie uma const com o valor "água com gás" e tente mudar para "refrigerante".
Veja o erro que aparece no console e escreva uma observação sobre isso nos comentários.

## 🏷️ Desafio 4: As etiquetas
Crie 5 variáveis com valores diferentes (string, number, boolean, null, undefined) e mostre o tipo de cada uma usando console.log(typeof ...).

## 💸 Desafio 5: Cálculo de mesada
Crie duas variáveis: mesada = 100 e gasto = 35.
Depois, crie uma variável restante que mostre quanto sobrou da mesada.

## 🎒 Desafio 6: Minha mochila
Crie uma variável chamada mochila que seja um array com 3 itens que você levaria para um evento tech. Depois, use console.log para mostrar o segundo item da lista.

## 📁 Desafio 7: Ficha de cadastro
Crie um objeto usuario com as propriedades:

- nome (string)
- idade (number)
- devFront (boolean)

Depois, mostre no console a frase:
"Olá, meu nome é [nome] e tenho [idade] anos. Sou dev Frontend? [true/false]"

## 🕵️‍♀️ Desafio 8: Investigando o tipo
Crie uma variável sem valor (não atribua nada).
Depois, verifique e mostre o tipo dela com typeof.

Depois atribua null e verifique o tipo de novo. Qual a surpresa?

## 🧠 Desafio 9: Curiosidade do typeof
Tente isso:

```
let valor = null;
console.log(typeof valor);
```

Por que aparece "object" se o valor é null?
Escreva a resposta como se você estivesse explicando pra um amigo de 10 anos.

## 🧠 Desafio Bônus – Mistura de Tipos
Crie um script que tenha as seguintes variáveis:
- nome com o valor "Taty" (tipo string)
- idade com o valor 20 (tipo number)
- profissão sem valor definido (vai ficar undefined)
- gostaDeCafé com valor null
- devFront com valor true

Agora, imprima no console:
- O tipo de cada variável usando typeof
- Uma mensagem amigável usando template string com os dados de nome, idade e devFront
- Um `if` que verifica se profissão está undefined e exibe: "Profissão ainda não definida."
- Um `if` que verifica se gostaDeCafé é null e exibe: "Precisa descobrir se gosta de café!"