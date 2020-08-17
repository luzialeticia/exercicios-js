/* Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor
que C. */

const input = require('readline-sync')
const a = Number(input.question('Digite um valor para A: '))
const b = Number(input.question('Digite um valor para B: '))
const c = Number(input.question('Digite um valor para C: '))
const soma = a + b

console.log(`A = ${a}\nB = ${b}\nC = ${c}\nSoma entre A e B = ${soma}`)

if (soma < c) {
    console.log(`A soma entre A e B é MENOR que o valor de C.\n${soma} < ${c}`)
}else if (soma === c) {
    console.log(`A soma entre A e B é IGUAL ao valor de C.\n${soma} = ${c}`)
}else {
    console.log(`A soma entre A e B é MAIOR que o valor de C.\n${soma} > ${c}`)
}