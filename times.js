let times=[
    {
        nome: "Magnus",
        goleiro: "André Déko",
        alaDireita: "Dieguinho",
        alaEsquerda: "Leandro Lino",
        pivo: "Leozin",
        fixo: "Rodrigo",
        tecnico: "Douglão",
        vitoria: 31,
        derrota: 5,
    },
    {
        nome: "Pato",
        goleiro: "Djony",
        alaDireita: "Neguinho",
        alaEsquerda: "Ton",
        pivo: "Bob",
        fixo: "Max",
        tecnico: "Betinho",
        vitoria: 22,
        derrota: 16,
    },
    {
        nome: "Corinthians",
        goleiro: "Koji",
        alaDireita: "Luisinho",
        alaEsquerda: "Joãozinho",
        pivo: "Andrey",
        fixo: "Allan",
        tecnico: "Malafaia",
        vitoria: 18,
        derrota: 15,
    },
    {
        nome: "ACBF",
        goleiro: "Ângelo",
        alaDireita: "Marcolla",
        alaEsquerda: "Alves",
        pivo: "Camilo",
        fixo: "Daniel",
        tecnico: "Sandro",
        vitoria: 24,
        derrota: 11,
    },
    {
        nome: "Minas",
        goleiro: "Anderson",
        alaDireita: "Guto",
        alaEsquerda: "Ribeiro",
        pivo: "Vitão",
        fixo: "Biel",
        tecnico: "Diego",
        vitoria: 21,
        derrota: 10,
    }
]
function verTimes(){
    times.forEach((time) =>{
        console.log (time.nome + "-" + time.goleiro + "(goleiro)," + time.alaDireita + "(Ala Direita)," + time.alaEsquerda + "(Ala Esquerda)," + time.pivo + "(Pivo)," + time.fixo + "(Fixo)," + time.tecnico + "(Técnico)," + time.vitoria + "(Vitórias)," + time.derrota + "(Derrotas),")
    });
}
verTimes();
