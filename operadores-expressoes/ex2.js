/* Faça um algoritmo para calcular quantas ferraduras são necessárias para equipar todos os
cavalos comprados para um haras. */

const input = require('readline-sync')

const cavalos = parseInt(input.question("Quantos cavalos você possui? "))
const ferraduras = 4 * cavalos

console.log(`Você vai precisar comprar ${ferraduras} ferraduras.`)