let lista = {
  arroz: 2,
  leite: 1,
  banana: 6
};

for (let item in lista) {
  console.log(`${item}: ${lista[item]}`)
  console.log(`Você comprou ${lista[item]} ${item}(s)`);
}
