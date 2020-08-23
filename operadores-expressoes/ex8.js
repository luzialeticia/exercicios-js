/* Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a sua média
ponderada (as notas tem pesos respectivos de 1, 2 e 3). */

const input = require('readline-sync')

let nota1 = parseFloat(input.question("Digite a 1ª nota: "))
let nota2 = parseFloat((input.question("Digite a 2ª nota: "))*2)
let nota3 = parseFloat((input.question("Digite a 3ª nota: "))*3)

let media = ((nota1 + nota2 + nota3) / (1+2+3)).toFixed(1)

console.log(`Sua média é ${media}.`)