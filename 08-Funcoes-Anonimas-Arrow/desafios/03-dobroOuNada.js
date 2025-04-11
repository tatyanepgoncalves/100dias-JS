const dobroOuNada = (numero) => {
  console.log(`O dobro do número ${numero} é: ${numero * 2}`)
}

dobroOuNada(10)

// OU 
const dobroNada = (numero) => {
  return numero * 2;
};

console.log(dobroNada(10));

// OU

const dobro = numero => numero * 2;

console.log(dobro(10));
