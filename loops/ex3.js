/* Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores
negativos e o percentual de valores negativos e positivos. */

const input = require('readline-sync')

let valores = []
let valor;


do {
    valor = parseInt(input.question("Digite um nº inteiro ou 0 para sair: "))
    valores.push(valor)

} while (valor !== 0)


let positivos = valores.filter(item => item > 0)
let quantPositivos = positivos.length
let porcentagemPositivos = (quantPositivos/(valores.length-1))*100

let negativos = valores.filter(item => item < 0)
let quantNegativos = negativos.length
let porcentagemNegativos = (quantNegativos/(valores.length-1))*100

let soma = valores.reduce((accumulator, currentItem) => (accumulator + currentItem), 0)

let media = soma/(valores.length-1) //tem que ser valores.length - 1 pq o 0 entra como item do array


console.log(`Média: ${media.toFixed(2)}\nQuantidade de nºs positivos: ${quantPositivos} - ${porcentagemPositivos.toFixed(1)}% dos itens.\nQuantidade de nº negativos: ${quantNegativos} - ${porcentagemNegativos.toFixed(1)}% dos itens.`)