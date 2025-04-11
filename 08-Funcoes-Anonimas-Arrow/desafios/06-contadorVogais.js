function contarVogais(texto) {
  const contar = function(str) {
    const vogais = "aeiouAEIOU"
    let contador = 0
    
    for (let letra of str) {
      if (vogais.includes(letra)) {
        contador++
      }
    }

    return contador
  }

  const total = contar(texto)
  console.log(`Na palavra "${texto}" tem ${total} vogais.`)
}

contarVogais("banana")

// OU 
function contarVogaisAnonima(texto) {
  const contar = (str) => {
    const vogais = "aeiouAEIOU";
    return [...str].filter(letra => vogais.includes(letra)).length;
  };

  console.log(`Na palavra "${texto}" tem ${contar(texto)} vogais.`);
}

contarVogaisAnonima("banana");
