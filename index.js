let saldoVitorias = 36
let saldoDerrotas = 4
let ranking

function calculadoraDeRanking(vitorias, derrotas, nivel){

    let s = vitorias - derrotas
    
    if (s < 10){
        nivel = 'Ferro'
    } else if (s >= 11 && s <= 20){
        nivel = 'Bronze'
    } else if (s >= 21 && s <= 50){
        nivel = 'Prata'
    } else if (s >= 51 && s <= 80){
        nivel = 'Ouro'
    } else if (s >= 81 && s <= 90){
        nivel = 'Diamante'
    } else if (s >= 91 && s <= 100){
        nivel = 'Lendário'
    } else if (s >= 101) {
        nivel = 'Imortal'
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