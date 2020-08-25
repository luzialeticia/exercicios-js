// Faça um Programa que leia três números e mostre o maior e o menor deles.

const input = require('readline-sync')

const num1 = parseFloat(input.question("Digite um nº: "))
const num2 = parseFloat(input.question("Digite um nº: "))
const num3 = parseFloat(input.question("Digite um nº: "))
const maiorNum = Math.max(num1, num2, num3)
const menorNum = Math.min(num1, num2, num3)

console.log(`${maiorNum} é o maior nº e ${menorNum} é o menor.`)