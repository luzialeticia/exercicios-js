/* Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores
negativos e o percentual de valores negativos e positivos. */

const input = require('readline-sync')

let valores = []
let valor;
let soma;
let media;

do {
    valor = parseInt(input.question("Digite um nº inteiro ou 0 para sair: "))
    valores.push(valor)

    soma = valores.reduce((accumulator, currentItem) => {
        return (accumulator + currentItem)
    },0)
} while (valor > 0)

media = soma/(valores.length-1)

console.log(media)