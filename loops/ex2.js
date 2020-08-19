/* Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
mostrar :
a. A menor altura do grupo;
b. A maior altura do grupo; */

const input = require('readline-sync')

let pessoas = 1
var altura = 0

while (pessoas <= 3) {
    var altura = parseFloat(input.question("Digite a altura? "))
    pessoas++
}

console.log(Math.min(altura))
console.log(Math.max(altura))