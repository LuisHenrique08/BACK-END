// LISTAS
//Lista de Strings 
// Índices:         0        1         2         3           4
const lanches = ["x-egg", "x-ovo", "x-bacon", "x-tudo", "x-frango"];
const precos = [12, 15, 15, 20, 12];

console.log(lanches);
console.log(precos);
// Acessar um item epecifico da lista:
console.log("Lanche - Preço")
console.log (lanches[0] + " - R$" + precos[0])
// x-egg - R$ 12
console.log (lanches[1] + " - R$" + precos[1])
// x-ovo - R$ 15
console.log (lanches[2] + " - R$" + precos[2])
// x-bacon - R$ 15
console.log (lanches[3] + " - R$" + precos[3])
// x-tudo - R$ 20
console.log (lanches[4] + " - R$" + precos[4])
// x-frango - R$ 12

const tamanho = lanches.length;
console.log(tamanho);


