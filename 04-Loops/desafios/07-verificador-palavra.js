let palavra = "radar";
let aoContrario = palavra.split("").reverse().join("");

if (palavra === aoContrario) {
  console.log(`"${palavra}" é um palíndromo!`);
} else {
  console.log(`"${palavra}" não é um palíndromo.`);
}