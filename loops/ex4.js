/* Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles
estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve
terminar quando for lido um número negativo. */

const input = require('readline-sync')

let num0a25 = []
let num26a50 = []
let num51a75 = []
let num75a100 = []

let num = Number(input.question("Digite um nº inteiro ou um nº negativo para sair: "))

if (num < 0) {
    console.log("saindo")
}else if (num <= 0 && num <= 25) {
    while (num <= 25) {
        num = Number(input.question("Digite um nº inteiro ou um nº negativo para sair: "))
        num0a25.push(num)
    }
}console.log(num0a25.length)

/*for (let num = 0; num >= 0;) {
    let num = Number(input.question("Digite um nº inteiro ou um nº negativo para sair: "))
    if (num <= 25) {
        num0a25.push(num)
    }
}

if (num < 0) {
    console.log("saindo")
}
console.log(num0a25.length)*/