/* Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor
que C. */

const input = require('readline-sync')
const a = Number(input.question('Digite um valor para A: '))
const b = Number(input.question('Digite um valor para B: '))
const c = Number(input.question('Digite um valor para C: '))
const soma = a + b