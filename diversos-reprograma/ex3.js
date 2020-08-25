// Faça um Programa que leia três números e mostre o maior deles.

const input = require('readline-sync')

const num1 = parseFloat(input.question("Digite um nº: "))
const num2 = parseFloat(input.question("Digite um nº: "))
const num3 = parseFloat(input.question("Digite um nº: "))
const maiorNum = Math.max(num1, num2, num3)

console.log(maiorNum)