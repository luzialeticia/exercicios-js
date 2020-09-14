// Faça um programa que leia um array e informe o maior número.

const input = require('readline-sync')

const array = new Array()

let numeros = parseInt(input.question("Digite um nº para colocar no array: "))
let sortComSlice;
let maiorNum;

do {
    numeros = parseInt(input.question("Digite um nº para colocar no array: "))
    array.push(numeros)

    sortComSlice = array.slice().sort((a, b) => b-a)

    maiorNum = sortComSlice[0]

} while(numeros >= 0)

console.log(`O maior nº no array é: ${maiorNum}`);