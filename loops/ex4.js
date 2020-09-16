/* Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles
estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve
terminar quando for lido um número negativo. */

const input = require('readline-sync')

let num0a25 = []
let num26a50 = []
let num51a75 = []
let num76a100 = []

let num;

do {
    num = parseInt(input.question("Digite um nº positivo para contar ou um nº negativo para sair: "))

    switch(num) {
        case num >= 0 && num <= 25:
            num0a25.push(num)
            break
        case num > 25 && num <= 50:
            num26a50.push(num)
            break
        case num > 50 && num <= 75:
            num51a75.push(num)
            break
        case num > 75 && num <= 100:
            num76a100.push(num)
            break
        default:
            break
    }
    
} while (num >=0 && num <= 100) 