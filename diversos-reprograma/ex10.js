//Faça um Programa que leia um numero e escreva a tabuada do mesmo de 1 a 10.

const input = require('readline-sync')

const num = parseInt(input.question("Digite um valor inteiro para ver sua tabuada: "))

for(let i = 1; i <= 10; i++) {
    let resultado = i * num
    console.log(`${num} X ${i} = ${resultado}`)
}