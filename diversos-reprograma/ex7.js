/* Faça um algoritmo que imprima números inteiros de n a 1 (Ex.: O usuário digita o número 10.
Você deve lista 10, 9, 8, 7, 6, 5, 4, 3, 2, 1); */

const input = require('readline-sync')

let num = parseInt(input.question("Digite um nº inteiro: "))

for(let i = num; i >= 1; i--) {
    console.log(i)
}