/* 12. Faça um algoritmo para ler o salário de um funcionário e aumentá-Io em 15%. Após o aumento,
desconte 8% de impostos. Imprima o salário inicial, o salário com o aumento e o salário final. */

const input = require('readline-sync')

const salario = parseFloat(input.question("Digite o salário bruto inicial: "))
const aumento15 = salario*(15/100)
const salarioComAumento = salario+aumento15
const impostos = salarioComAumento*(8/100)
const salarioComImpostos = salarioComAumento-impostos

console.log(`Salário inicial: R$ ${salario.toFixed(2)}`);
console.log(`Salário com aumento de 15%: R$ ${salarioComAumento.toFixed(2)}`);
console.log(`Salário líquido: R$ ${salarioComImpostos.toFixed(2)}`);