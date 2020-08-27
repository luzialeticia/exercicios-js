//Faça um Programa que leia um numero e escreva a tabuada do mesmo de 1 a 10.

function tabuada(numero) {
    for(let i = 1; i <= 10; i++) {
        let resultado = i * numero
        return `${numero} X ${i} = ${resultado}`
    }
}

const input = require('readline-sync')

const num = parseInt(input.question("Digite um valor inteiro para ver sua tabuada: "))