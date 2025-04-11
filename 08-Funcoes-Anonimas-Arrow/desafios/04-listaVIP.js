// Dada uma lista de nomes, use `map()` com uma função anônima para transformar todos os nomes em: `"Sr(a). Nome"`.

// ```js
  // Ex: ["Taty", "Lucas"] → ["Sr(a). Taty", "Sr(a). Lucas"]
// ```

const nomes = ["Bea", "João", "Maya", "Enrico"];

// Cria um novo array  - map()
const nome = function() {
  const nomesFormatados = nomes.map((item) => `Sr(a). ${item}`);
  console.log(nomesFormatados);
};

nome();

// Só imprimi
const nomeFor = function () {
  nomes.forEach((item) => {
    console.log(`Sr(a). ${item}`);
  });
};

nomeFor()