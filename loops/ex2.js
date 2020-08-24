/* Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
mostrar:
a. A menor altura do grupo;
b. A maior altura do grupo; */

const input = require('readline-sync')

let alturas = []

for (let i = 1; i <= 15; i++) {
    let altura = parseFloat(input.question("Digite a altura: "))
    alturas.push(altura)
}
console.log(alturas)