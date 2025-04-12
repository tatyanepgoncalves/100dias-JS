// Use `.every()` pra verificar se **todos os alunos** tiraram **nota maior ou igual a 6**.

const notas = [8, 7, 5, 4, 10];
const todosAprovados = notas.every((nota) => nota >= 6)

if (todosAprovados === true) {
  console.log("Todos os alunos aprovados!")
} else {
  console.log("Tem aluno reprovado!")
}