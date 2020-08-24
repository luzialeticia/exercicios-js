/* Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
mostrar:
a. A menor altura do grupo;
b. A maior altura do grupo; */

const input = require('readline-sync')

let alturas = []

for (let i = 1; i <= 15; i++) {
    let altura = parseFloat(input.question("Digite a altura em metros: ")).toFixed(2)
    alturas.push(altura)
}
console.log(`A menor altura do grupo é ${Math.min.apply(null, alturas)} metros.\nE a maior altura é ${Math.max.apply(null, alturas)} metros.`)