/* O restaurante a quilo Bem-Bão cobra R$12,00 por cada quilo de refeição. Escreva um algoritmo
que leia o peso do prato montado pelo cliente (em quilos) e imprima o valor a pagar. Assuma que a
balança já desconte o peso do prato. */

const input = require('readline-sync')

const pesoPrato = parseFloat(input.question('Peso total do prato: ')).toFixed(3)
let valorTotal = 0

if (pesoPrato >= 1) {
    valorTotal = pesoPrato*12.00
}else {
    valorTotal =  (pesoPrato*12.00)/1000
}

console.log(valorTotal)