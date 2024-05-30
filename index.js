const prompt = require('prompt-sync')();

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
    } else {
        nivel = 'Imortal'
    }

    console.log(`O herói tem saldo de ${s} vitórias e está no nível ${nivel}`)
}

let resp
let saldoVitorias
let saldoDerrotas
let ranking

do{
    
    saldoVitorias = prompt('Saldo de vitorias do herói: ')
    saldoDerrotas = prompt('Saldo de derrotas do herói: ')
    calculadoraDeRanking(saldoVitorias, saldoDerrotas, ranking)
    resp = prompt('Fazer novo cálculo de ranking? [S/N] ')
    
} while (resp === 'S' || resp === 's')