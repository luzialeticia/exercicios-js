/* Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores
negativos e o percentual de valores negativos e positivos. */

const input = require('readline-sync')

let valores = []
const parar = "p"
let i = 0

while (i !== "p") {
    i = parseInt(input.question("Digite um valor ou 'p' para sair: "))
    valores.push(i)
}