let peso = 22
let altura = 0.97
const imc = peso / (altura ** 2)
const imcFormatado = imc.toFixed(1)

const pesoAbaixo = 18.5
const pesoNormal = 24.9

if (imc < pesoAbaixo) {
  console.log("Magreza")
} else if (imc >= pesoAbaixo && imc <= pesoNormal) {
  console.log("Normal")
} else {
  console.log("Sobrepeso")
}

console.log(`Seu IMC é ${imcFormatado}`);