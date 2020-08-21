/* Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo,
imprimindo o resultado. */

const input = require('readline-sync')

const num = Number(input.question("Digite um nº: "))
let resposta = num > 0 ? num*2 : num*3
console.log(resposta)