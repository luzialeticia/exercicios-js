/* Escreva um algoritmo que leia um valor inicial A e imprima a seqüência de valores do cálculo de
A! e o seu resultado. Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120 */

const input = require('readline-sync')

let a = parseInt(input.question("Digite um valor inteiro para calcular seu fatorial: "))

for (let i = 1; i <= a; i++) {
    let result = i*i
    console.log(result)
}