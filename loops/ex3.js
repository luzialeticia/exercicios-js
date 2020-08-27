/* Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores
negativos e o percentual de valores negativos e positivos. */

const input = require('readline-sync')

let valores = []
//const parar = "p"
let i = 0
const soma = valores.reduce((accumulator, currentItem) => {
    return (accumulator + currentItem)///valores.length
}, 0)

let valor = parseInt(input.question("Digite um valor: "))

while (valor >= 0) {
    valor = parseInt(input.question("Digite um valor: "))
    valores.push(valor)
    if (valor < 0) {
        console.log(valores)
    }
}
console.log(soma)