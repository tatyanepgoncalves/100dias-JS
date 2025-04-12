// 👉 **Desafio:** Use `.map()` pra criar um novo array com +1 ponto em cada nota, sem alterar as originais.

const notas = [6, 7.5, 9];

function notasNovas() {
  notas.map((item) => {
    console.log(`A nota ${item} passou para ${item + 1}`)
  })
}

notasNovas()