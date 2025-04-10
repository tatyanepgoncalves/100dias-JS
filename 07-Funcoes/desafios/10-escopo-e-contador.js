// Crie uma função `contador()` que retorna outra função. A cada vez que a função retornada for chamada, ela deve aumentar o número e mostrar o valor atual.

// ```js
// const contar = contador();
// contar(); // 1
// contar(); // 2
// contar(); // 3
// ```


function contador() {
  let numero = 0;

  return function () {
    numero++;
    console.log(`Valor atual: ${numero}`);
  };
}

const minhaContagem = contador(); 

minhaContagem();
minhaContagem();
minhaContagem();
