/* Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar,
imprimir o resultado desta operação. */

const input = require('readline-sync')

let num = parseInt(input.question("Digite um nº inteiro: "))

if (num%2===0) {
    num = num + 5
} else if (num%2!==0) {
    num = num + 8
}
console.log(num)