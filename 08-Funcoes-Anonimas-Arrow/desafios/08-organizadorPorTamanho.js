// Crie uma função que receba um array de strings e retorne as palavras ordenadas por tamanho (menor para maior), usando funções anônimas.

const ordenarPorTamanho = function(palavras) {
  return palavras.sort(function(a, b) {
    return a.length - b.length;
  });
};

const palavras = ["banana", "uva", "melancia", "kiwi", "abacaxi"];
console.log(ordenarPorTamanho(palavras));

// OU

const ordenarPorTamanhoPalavras = (palavras) => {
  return palavras.sort((a, b) => a.length - b.length);
};
console.log(ordenarPorTamanhoPalavras(palavras));