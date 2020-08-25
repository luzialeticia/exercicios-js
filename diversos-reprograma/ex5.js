/* Crie uma função que chame qualquer uma das funções acima e imprima o resultado no formato de String.
Exemplo: "O resultado da operação é X" (sendo X o valor do resultado). */

function maiorNum(x, y, z) {
    return Math.max(x, y, z)
}

function menorNum(x, y, z) {
    return Math.min(x, y, z)
}

function maiorMenor (a, b, c) {
    return `O maior nº entre ${a}, ${b} e ${c} é: ${maiorNum(a, b, c)}.\nE o menor nº entre ${a}, ${b} e ${c} é: ${menorNum(a, b, c)}.`
}

const input = require('readline-sync')

const num1 = parseFloat(input.question("Digite um nº: "))
const num2 = parseFloat(input.question("Digite um nº: "))
const num3 = parseFloat(input.question("Digite um nº: "))

console.log(maiorMenor(num1, num2, num3))