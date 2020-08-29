/* Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar,
imprimir o resultado desta operação. */

const input = require('readline-sync')

function soma(numero) {
    if (numero%2===0) {
        return numero = numero + 5
    } else if (numero%2!==0) {
        return numero = numero + 8
    }
}

const num = parseInt(input.question("Digite um nº inteiro: "))

console.log(soma(num))