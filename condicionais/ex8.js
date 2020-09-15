/* 8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem
decrescente. */

const input = require('readline-sync')

let array = []

const num1 = parseInt(input.question("Digite um nº inteiro para comparar: "))
const num2 = parseInt(input.question("Digite outro nº inteiro para comparar: "))
const num3 = parseInt(input.question("Digite o último nº inteiro para comparar: "))

array.push(num1)
array.push(num2)
array.push(num3)

const arrayOrdenado = array.sort((a, b) => b - a)

console.log(arrayOrdenado[0]);
console.log(arrayOrdenado[1]);
console.log(arrayOrdenado[2]);