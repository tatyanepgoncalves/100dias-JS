// 👉 **Desafio:** Use `.some()` pra verificar se **algum aluno** tirou nota menor que 6.

const notas = [8, 7, 5, 4, 10];

const temAlunoReprovado = notas.some((nota) => nota < 6)

if (temAlunoReprovado === true) {
  console.log("Tem aluno reprovado!")
} else {
  console.log("Não tem aluno reprovado!")
}