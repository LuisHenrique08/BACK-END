let custos=[800, 1000, 300, 500];
let contador=0;
let somatorio=0;
while(contador<custos.length){
    somatorio = somatorio + custos[contador];
    contador = contador + 1;
}
console.log ("O seu custo mensal é " + somatorio);

let ganhos=[3200, 550, 1300, 325];
let contadorSalarios=0;
let somatorioSalarios=0;
while(contadorSalarios<ganhos.length){
    somatorioSalarios = somatorioSalarios + ganhos[contadorSalarios];
    contadorSalarios = contadorSalarios + 1;
}
console.log ("O seu ganho mensal é " + somatorioSalarios);

let diferenca = [ganhos - custos];
console.log ("O seu saldo mensal é ");