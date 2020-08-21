/* Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se
somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se
atribuir o resultado para uma variável C e mostrar seu conteúdo na tela. */

const input = require('readline-sync')

const a = parseInt(input.question('Digite um nº inteiro: '))
const b = parseInt(input.question('Digite outro nº inteiro: '))
let c = 0

if (a === b) {
    c = a + b
    console.log(`${a} e ${b} são iguais. C = A + B -> ${c}`)
}else {
    c = a * b
    console.log(`${a} e ${b} são diferentes. C = A x B -> ${c}`)
}