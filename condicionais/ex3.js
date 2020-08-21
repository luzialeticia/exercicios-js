//Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar.

const input = require('readline-sync')

const num = Number(input.question('Digite um nº inteiro qualquer: '))

if (num%2 === 0) {
    console.log(`${num} é par.`)
}else {
    console.log(`${num} é ímpar.`)
}