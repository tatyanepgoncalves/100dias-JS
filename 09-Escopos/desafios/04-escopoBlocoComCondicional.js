// Dentro de uma função, crie uma condicional `if` que declare uma variável `status`. Se um número for maior que 10, `status` deve ser "Maior". Se não, "Menor". Teste se a variável `status` está acessível fora do bloco `if`.

function status(numero) {
  if (numero >= 10) {
    console.log("Maior")
  } else {
    console.log("Menor")
  }
}

status(5)