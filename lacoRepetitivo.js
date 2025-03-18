let custos=[800, 1000, 300, 500];
let contador=0;
let somatorioCustos=0;
while(contador<custos.length){
    somatorioCustos = somatorioCustos + custos[contador];
    contador = contador + 1;
}
console.log ("O seu custo mensal é " + somatorioCustos);

let ganhos=[3200, 550, 1300, 325];
let contadorSalarios=0;
let somatorioSalarios=0;
while(contadorSalarios<ganhos.length){
    somatorioSalarios = somatorioSalarios + ganhos[contadorSalarios];
    contadorSalarios = contadorSalarios + 1;
}
console.log ("O seu ganho mensal é " + somatorioSalarios);

let diferenca = somatorioSalarios - somatorioCustos;
console.log ("O seu saldo mensal é " + diferenca);