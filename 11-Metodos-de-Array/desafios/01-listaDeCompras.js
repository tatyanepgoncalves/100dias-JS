// Você tem a seguinte lista:

const compras = ['Pão', 'Leite', 'Café'];

// 👉 **Desafio:** Crie uma função que exiba no console:
// ```
// Item 1: Pão
// Item 2: Leite
// Item 3: Café
// ```

function listaCompra() {
  compras.map((item, id) => {
    id++
    console.log(`Item ${id}: ${item}`)
  })
}

listaCompra()