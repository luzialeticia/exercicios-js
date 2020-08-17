/* A imobiliária Imóbilis vende apenas terrenos retangulares. Faça um algoritmo para ler as
dimensões de um terreno e depois exibir a área do terreno. 

Área do retângulo A = bxh */

const input = require('readline-sync')

const base = parseFloat(input.question('Digite o valor da base do terreno: '))
const altura = parseFloat(input.question('Digite o valor da altura do terreno: '))
const area = (base * altura).toFixed(2);

console.log(`O terreno possui ${area}m² de área.`);