let lado1 = 5
let lado2 = 6
let lado3 = 7

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
  if (lado1 === lado2 && lado2 === lado3) {
    console.log("Triângulo Equilátero");
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Triângulo Isósceles");
  } else {
    console.log("Triângulo Escaleno");
  }
} else {
  console.log("Os lados não formam um triângulo!")
}