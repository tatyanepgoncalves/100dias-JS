Aqui estão 10 desafios para praticar sobre **Escopo em JavaScript**. Dividi em 3 níveis de dificuldade para te ajudar a avançar no aprendizado.

### **Desafios Fáceis** 

1. **Desafio 1: Variáveis Globais**
   Crie uma variável global chamada `nome` e uma função `saudar()` que exibe um cumprimento utilizando a variável `nome`. Teste o comportamento se a variável for alterada fora da função.

2. **Desafio 2: Variáveis Locais**
   Crie uma função chamada `multiplicar()` que aceita dois parâmetros e retorna o resultado da multiplicação. Dentro da função, declare uma variável `resultado` que armazene o valor da multiplicação e exiba o resultado no console.

3. **Desafio 3: Função de Soma com Variáveis Globais**
   Declare uma variável global `a = 5`. Crie uma função chamada `somar()` que adicione `a` com o valor passado como argumento e exiba o resultado.

4. **Desafio 4: Escopo de Bloco com Condicional**
   Dentro de uma função, crie uma condicional `if` que declare uma variável `status`. Se um número for maior que 10, `status` deve ser "Maior". Se não, "Menor". Teste se a variável `status` está acessível fora do bloco `if`.

5. **Desafio 5: Contador de Loop**
   Crie um loop `for` que conte de 1 a 5. Declare uma variável dentro do loop e exiba seu valor. Teste se a variável é acessível fora do loop.

---

### **Desafios Intermediários** 

6. **Desafio 6: Escopo de Função**
   Crie duas funções: `adicionar()` e `subtrair()`. Ambas devem utilizar uma variável global `x`. A primeira função deve adicionar 10 a `x` e a segunda subtrair 5. Após cada execução, exiba o valor de `x` e verifique o comportamento.

7. **Desafio 7: Função Dentro de Função (Closure)**
   Crie uma função `criarContador()` que retorna outra função que aumenta um contador. O contador deve ser iniciado como `0` e incrementado toda vez que a função interna for chamada. Teste se o contador é mantido entre chamadas.

8. **Desafio 8: Escopo de Bloco com `let` e `const`**
   Crie um código que utilize um `for` loop. Dentro do loop, declare uma variável com `let` e outra com `const`. Exiba o valor de ambas dentro do loop e depois fora do loop. Teste o comportamento de ambas as variáveis.

---

### **Desafios Difíceis** 

9. **Desafio 9: Escopo Global x Local (Confusão de Nomes)**
   Crie uma variável global chamada `valor` e, dentro de uma função, crie outra variável chamada `valor`. Exiba os valores da variável global e da local dentro e fora da função para entender a diferença de escopo e como elas se sobrepõem.

10. **Desafio 10: Closure Complexo**
    Crie uma função `contador()` que retorna duas funções: uma para incrementar e outra para decrementar um contador. Ambas as funções devem ter acesso ao mesmo contador e você deve ser capaz de chamar essas funções para alterar o valor do contador. Mostre o valor do contador após várias operações e veja como ele é preservado entre as execuções.

Esses desafios cobrem uma boa parte do comportamento de escopo no JavaScript, desde o básico até o mais avançado. Aproveite e tente resolver!