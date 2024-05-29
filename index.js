let saldoVitorias = 15
let saldoDerrotas = 8
let ranking

function calculadoraDeRanking(vitorias, derrotas, nivel){

    let s = vitorias - derrotas
    
    for (let i = 0; i <= 7; i++){
        if (s < 10){
            nivel = 'Ferro'
        }
    }
    console.log(`O herói tem saldo de ${s} vitórias e está no nível ${nivel}`)
}

calculadoraDeRanking(saldoVitorias, saldoDerrotas, ranking)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal