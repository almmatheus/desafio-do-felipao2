const prompt = require('prompt-sync')();

function calculadoraDeRanking(vitorias, derrotas, nivel){

    let saldoVitorias = vitorias - derrotas
    
    if (saldoVitorias < 10){
        nivel = 'Ferro'
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20){
        nivel = 'Bronze'
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50){
        nivel = 'Prata'
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80){
        nivel = 'Ouro'
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90){
        nivel = 'Diamante'
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100){
        nivel = 'Lendário'
    } else {
        nivel = 'Imortal'
    }

    console.log(`O herói tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`)
}

let resp
let vitorias
let derrotas
let ranking

do{
    
    vitorias = prompt('Saldo de vitorias do herói: ')
    derrotas = prompt('Saldo de derrotas do herói: ')
    calculadoraDeRanking(vitorias, derrotas, ranking)
    resp = prompt('Fazer novo cálculo de ranking? [S/N] ')
    
} while (resp === 'S' || resp === 's')