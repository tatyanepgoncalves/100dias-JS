// Crie uma função `calcular(a, b, operador)` que realiza soma, subtração, multiplicação ou divisão.

// ```js
// calcular(10, 5, "+"); // 15
// ```


function calcular(a, b, operador) {
  if (operador === "+") {
    console.log(`A soma de ${a} + ${b} é ${a + b}.`)
  } else if (operador === "-") {
    console.log(`A subtração de ${a} - ${b} é ${a - b}.`)
  } else if (operador === "*") {
    console.log(`A multiplicação de ${a} x ${b} é ${a * b}.`)
  } else if (operador === "/") {
    if (b === 0) {
      console.log("Erro: divisão por zero!")
    } else {
      console.log(`A divisão de ${a} / ${b} é ${a / b}.`)
    }
  }
}

calcular(5,5, "+")
calcular(5,5, "-")
calcular(5,5, "*")
calcular(5,5, "/")

// OU 

function calcular(a, b, operador) {
  if (operador === "+") {
    return a + b;
  } else if (operador === "-") {
    return a - b;
  } else if (operador === "*") {
    return a * b;
  } else if (operador === "/") {
    return b === 0 ? "Erro: divisão por zero!" : a / b;
  } else {
    return "Operador inválido!";
  }
}

console.log(calcular(5, 5, "+")); 
