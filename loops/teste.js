/* Faça um programa que calcule o aumento de um salário.
Ele deve solicitar o valor do salário e a porcentagem do aumento.
Exiba o valor do aumento e do novo salário. */

const input = require('readline-sync')

const salario = parseFloat(input.question('Qual o valor do salário atual? '))
const aumento = parseFloat(input.question('De quanto será o aumento? (digite o valor em porcentagem, sem o "%": '))
const porcentagem  = aumento/100
const liquido = salario*porcentagem
const novoSalario = salario + liquido

console.log(`O valor líquido do seu aumento é de R$ ${liquido}`)
console.log(`Seu salário agora será de R$ ${novoSalario}`)