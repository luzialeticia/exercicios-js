/* Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles
estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve
terminar quando for lido um número negativo. */

const input = require('readline-sync')
let numeros = []
let i = 0

while (i >= 0) {
    let num = parseInt(input.question("Digite um nº inteiro ou um nº negativo para sair: "))
    numeros.push(num)
    if (num < 0) {
        console.log("Saindo")
    }
}